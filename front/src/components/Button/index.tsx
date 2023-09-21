import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
//import { MdModeEdit } from 'react-icons/md';
import { IoIosAdd } from 'react-icons/io';
import { useI18n } from '../../contexts/I18nContext';
import { useTranslation } from 'react-i18next';

interface ButtonProps {
  editIcon?: boolean;
  addIcon?: boolean;
  className?: string;
  variante?: string;
  href?: string;
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  external?: string;
  params?: {} | undefined;
}
interface RouteParams {
  [key: string]: string | number;
}
const replaceRouteParams = (route: string, params?: RouteParams): string => {
  let newRoute = route;
  if (params && typeof params === 'object') {
    for (const [key, value] of Object.entries(params)) {
      newRoute = newRoute.replace(`:${key}`, String(value));
    }
  }
  return newRoute;
};

const Button = ({
  editIcon,
  addIcon,
  className = '',
  variante = '',
  href = '',
  children,
  type = 'submit',
  onClick,
  external,
  params
}: ButtonProps) => {
  const { language } = useI18n();
  const { t } = useTranslation();
  const translatedRoute = '/' + language + t(href, { ns: 'routes' });
  const finalRoute = replaceRouteParams(translatedRoute, params);
  const url = external ? external : finalRoute;
  return (
    <>
      {variante === 'link' && editIcon ? (
        <Link to={url} className={className}>
          <span className="ml-2">{children}</span>
        </Link>
      ) : variante === 'link' && addIcon ? (
        <Link to={url} className={className}>
          <IoIosAdd />
          <span className="ml-2">{children}</span>
        </Link>
      ) : variante === 'link' ? (
        <Link to={url} className={className}>
          {children}
        </Link>
      ) : href ? (
        <a href={url} target="_blank" rel="noopener noreferrer" className={className ? className : 'link'}>
          {children}
        </a>
      ) : onClick ? (
        <button type={type} onClick={onClick} className={className}>
          {children}
        </button>
      ) : (
        <button type={type} onClick={onClick} className={className}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;

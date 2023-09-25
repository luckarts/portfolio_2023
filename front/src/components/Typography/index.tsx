import React from 'react';

export default function Typography({ className, variante, children }: TypographyProps) {
  return (
    <>
      {variante === 'h1' ? (
        <h1 className={className}>{children}</h1>
      ) : variante === 'h2' ? (
        <h2 className={className}>{children}</h2>
      ) : variante === 'h3' ? (
        <h3 className={className}>{children}</h3>
      ) : variante === 'h4' ? (
        <h4 className={className}>{children}</h4>
      ) : (
        <p className={className}>{children}</p>
      )}
    </>
  );
}
interface TypographyProps {
  className?: string;
  variante: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  children: React.ReactNode;
}

import { useEffect, useRef } from 'react';
import { TimelineObserverProps, SetObservableProps, ObservableHTMLEntry, removeObservableProps } from './type';

const halfScreenHeight = typeof window !== 'undefined' ? window.innerHeight / 1.3 : 0;

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2
};

/**
 * Ajoute un élément observé à la liste des observables s'il n'est pas déjà présent.
 * Chaque élément est identifié par son ID et est associé à un objet contenant l'observable,
 * un indicateur pour savoir s'il a été passé et une fonction de rappel optionnelle.
 *
 * @param {SetObservableProps} props - Les propriétés passées à la fonction.
 */
function setObservable({ obs, observableList, callbacks }: SetObservableProps) {
  const obsId = (obs.target as HTMLElement).id;

  if (!observableList.has(obsId)) {
    observableList.set(obsId, {
      observable: obs,
      isPassed: false,
      callbackFn: callbacks[obsId] || null
    });
  }
}

function removeObservable({ obs, observableList }: removeObservableProps) {
  const obsName = obs?.target.id;

  if (observableList.has(obsName)) {
    observableList.set(obsName, {
      ...observableList.get(obsName),
      isPassed: true
    });
  }
}

/**
 * Colorize function that modifies the background color of elements in an observable list based on their position relative to the screen's midpoint.
 * @param observableList - List of observables to be processed.
 * @param initialColor - Initial color for the gradient.
 * @param fillColor - Fill color for the gradient.
 */
function colorize(
  observableList: Map<string, ObservableHTMLEntry>,
  initialColor: string | null,
  fillColor: string | null
): void {
  observableList.forEach((observable) => {
    if (!observable.isPassed) {
      const rect = observable.observable.target.getBoundingClientRect();
      const entry = observable?.observable;

      if (rect.bottom > halfScreenHeight && rect.top < halfScreenHeight) {
        if (initialColor && fillColor) {
          const depthPx = rect.bottom - halfScreenHeight;
          const depthPercent = (depthPx * 100) / rect.height - 32;
          entry.target.style.background = `linear-gradient(to top, ${initialColor} ${depthPercent}%, ${fillColor} ${depthPercent}% 100%)`;
          entry.target.style.transform = 'translateZ(0)';
        }
      }

      if (rect.bottom < halfScreenHeight) {
        if (initialColor && fillColor) {
          entry.target.style.background = fillColor;
          entry.target.style.transform = 'unset';
        }

        if (observable.callbackFn) {
          observable.callbackFn();
        }

        removeObservable({
          obs: entry,
          observableList
        });
      }
    }
  });
}

/**
 * `TimelineObserver` est un composant React qui utilise l'API `IntersectionObserver` pour surveiller les éléments
 * spécifiés et déclencher des actions en fonction de leur visibilité à l'écran. Lorsqu'un élément observé entre
 * ou sort de la zone visible, la fonction modifie la couleur de fond de l'élément en fonction de sa position
 * par rapport au milieu de l'écran.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {Function} props.handleObserve - Une fonction callback qui est appelée avec une fonction `setObserver`.
 * Cette fonction `setObserver` est utilisée pour spécifier quels éléments doivent être observés.
 * @param {string} props.initialColor - La couleur initiale à appliquer à l'élément observé.
 * @param {string} props.fillColor - La couleur de remplissage à appliquer à l'élément observé lorsqu'il est
 * complètement visible.
 *
 */

const TimelineObserver = ({ handleObserve, initialColor, fillColor }: TimelineObserverProps) => {
  const observablesStore = useRef(new Map());
  const callbacks = useRef<Record<string, () => void>>({});

  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setObservable({
          obs: entry,
          observableList: observablesStore.current,
          callbacks: callbacks.current
        });
      }
    });
  };

  const observer = useRef(new IntersectionObserver(callback, options));

  const animation = () => {
    window.requestAnimationFrame(() => {
      colorize(observablesStore.current, initialColor, fillColor);
    });
  };

  useEffect(() => {
    document.addEventListener('scroll', animation);
    return () => {
      document.removeEventListener('scroll', animation);
    };
  }, []);

  const setObserver = (elem: HTMLElement, callbackFn?: () => void) => {
    const elemId = elem?.id;

    if (initialColor) {
      elem.style.background = initialColor;
    }

    observer.current.observe(elem);

    if (elemId && callbackFn) {
      callbacks.current[elemId] = callbackFn;
    }
  };

  return <div>{handleObserve(setObserver)}</div>;
};

export default TimelineObserver;

export type TimelineObserverProps = {
  handleObserve: (setObserver: (elem: HTMLElement, callbackFn?: () => void) => void) => JSX.Element;
  initialColor: string;
  fillColor: string;
};

export type ObservableEntry = {
  isPassed: boolean;
  observable: IntersectionObserverEntry;
  callbackFn?: () => void;
};

export type ObservableHTMLEntry = {
  isPassed: boolean;
  observable: {
    target: HTMLElement;
  };
  callbackFn?: () => void;
};

export interface SetObservableProps {
  obs: IntersectionObserverEntry;
  observableList: Map<string, ObservableEntry>;
  callbacks: { [key: string]: () => void };
}
export interface removeObservableProps {
  obs: { target: HTMLElement };
  observableList: Map<string, any>;
}

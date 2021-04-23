import * as React from 'react';
import { LayoutContext } from './LayoutContext';
import useWindowDimensions from '../../../utils/WindowDimensionHook';

function LayoutProvider(props: any) {
  const [isProfileExpanded, setExpanded] = React.useState(true);

  const persistProfileExpand = () => {
    setExpanded(!isProfileExpanded);
  };

  const { height, width } = useWindowDimensions();

  React.useEffect(() => {
    if (width < 992 && width !== 0) {
      setExpanded(false);
    } else if (width >= 992 && !isProfileExpanded) {
      setExpanded(true);
    }
  }, [width]);

  return (
    <LayoutContext.Provider
      value={{ isProfileExpanded, expandProfile: () => persistProfileExpand() }}
    >
      {props.children}
    </LayoutContext.Provider>
  );
}

export default LayoutProvider;

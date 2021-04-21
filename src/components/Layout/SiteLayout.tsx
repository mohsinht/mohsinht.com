import React from 'react';
import '../../styles/global.scss';
import SiteContainer from './SiteContainter';
import ProfilePanel from '../ProfilePanel';
import SiteContent from './SiteContent';
import Header from '../Header';
import useWindowDimensions from '../../utils/WindowDimensionHook';

export default function SiteLayout(props: any) {
  const [isExpanded, setExpand] = React.useState(false);
  const { height, width } = useWindowDimensions();
  const onSidePanelExpand = () => {
    setExpand(!isExpanded);
  };
  React.useEffect(() => {
      if(width < 992) {
          setExpand(true);
      }
  }, [height, width]);
  return (
    <>
      <Header />
      <SiteContainer>
        <ProfilePanel isExpanded={isExpanded} expandSiteContent={onSidePanelExpand} />
        <SiteContent isExpanded={isExpanded}>{props.children}</SiteContent>
      </SiteContainer>
    </>
  );
}

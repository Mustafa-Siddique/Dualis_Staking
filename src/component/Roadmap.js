import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {GiMissileLauncher, GiRocketFlight, GiPoliceBadge, GiMetalBoot} from 'react-icons/gi'

export default function Roadmap() {

  return (
    <div id="roadmap-cont" className="position-relative py-5">
      <h2 style={{color:"#ffcc00", textAlign:"center", fontWeight:"200", marginBottom:"50px"}}>Roadmap</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#441C72', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #441C72' }}
          date="Dec 2021 - Feb 2022"
          iconStyle={{ background: '#441C72', color: '#fff' }}
          icon={<GiMissileLauncher />}
        >
          <h3 className="vertical-timeline-element-title">PHASE I</h3>
          <h4 className="vertical-timeline-element-subtitle">PRE-LAUNCH</h4>
          <p>
          • Private Sale to collect funds for development of platform &AMP; presale marketing<br/>
          • Beta Version of $DUALIS platform with "Safe Haven"<br/>
          • Presale Marketing and promotions<br/>
          • Listing of 100+ Project Owners, Developers, Influencers/Promoters
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#441C72', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #441C72' }}
          date="March 2022"
          iconStyle={{ background: '#441C72', color: '#fff' }}
          icon={<GiRocketFlight />}
        >
          <h3 className="vertical-timeline-element-title">PHASE II</h3>
          <h4 className="vertical-timeline-element-subtitle">POST LAUNCH</h4>
          <p>
          • V1 of $DUALIS platform launch<br/>
          • Listing of more Project Owners, Developers, Influencers/Promoters<br/>
          • Post launch marketing campaign<br/>
          • Major Listings &amp; Trendings
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#441C72', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #441C72' }}
          date="April 2022"
          iconStyle={{ background: '#441C72', color: '#fff' }}
          icon={<GiPoliceBadge />}
        >
          <h3 className="vertical-timeline-element-title">PHASE III</h3>
          <h4 className="vertical-timeline-element-subtitle">FREELANCING &amp; ESCROW</h4>
          <p>
          • Launch of $DUALIS Square (Freelancing platform with escrow payment services)<br/>
          • Marketing campaign for $DUALIS Square<br/>
          • Partnerships with popular freelancers
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2022"
          iconStyle={{ background: '#a28eb9', color: '#fff' }}
          icon={<GiPoliceBadge />}
        >
          <h3 className="vertical-timeline-element-title">PHASE IV</h3>
          <h4 className="vertical-timeline-element-subtitle">INSURING DEFI</h4>
          <p>
          • Launch of Insurance on blockchain for $DUALIS holders<br/>
          • Marketing campaign for Insurance platform<br/>
          • Partnerships with major Insurance players
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jun - Jul 2022"
          iconStyle={{ background: '#a28eb9', color: '#fff' }}
          icon={<GiMetalBoot />}
        >
          <h3 className="vertical-timeline-element-title">PHASE V</h3>
          <p>
          • Launchpad for projects willing to list on $DUALIS platform<br/>
          • VC Funding and Presale platforms<br/>
          • NFT Marketplace to be launched in Metaverse<br/>
          • First Insurance provider in Metaverse
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
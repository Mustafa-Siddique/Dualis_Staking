import React from "react";

export default function SectionFAQs() {
  return (
    <div id="faqs-cont" className="position-relative py-5">
      <h2>FAQs</h2>
      <div className="row mt-4">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                What is Dualis Finance ( $DUALIS ) Contract Address?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body text-secondary">
                <p>Our BEP-20 Smart Contract is as follow :</p>
                <br />
                <b>0x609b88f5a4aBB7A55bA0c6d255C3F1b1bC7A4D76</b>
                <br />
                We recommend verifying it on BSC SCAN
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                What is coming up for Dualis Finance ( $DUALIS )?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body text-secondary">
                We have already released our first utility Safe Haven. Some
                exciting utilities to be released in the near future, we will
                start with Escrow payment services for the service providers in
                DeFi space, followed by Insurance DAO, Launchpad and many more .
                We are working toward building whole ecosystem.
              </div>
            </div>
          </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              What is Safe Haven?
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body text-secondary">
              'Safe Haven' will list all highly rated Devs, their projects,
              Service providers, Influencers and Promoters who have delivered
              well in the past. One place to find most promising projects and
              services and achieve financial freedom for all investors across
              the DeFi space.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              How do you plan to keep investors and community safe from
              potential rug pulls and scams in DeFi?
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFour"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body text-secondary">
              We will be developing an ecosystem by creating a platform where
              only legit devs, influencers/promoters and service providers will
              be listed. They will be listed on the platform after KYC and
              ticking our listing parameters which will make them eligible for a
              rating system. On the basis of the ratings one can contact a dev,
              influencer/promoter or service provider according to their
              requirements and investors can invest in their projects on the
              basis of the ratings which will keep them away from the scams.
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

const Trusted = () => {
  return (
    <div className="mt-36">
      <h1 className="text-center text-4xl font-bold tracking-wider mx-auto">
        Collaborate without <br /> constraints
      </h1>
      <div className="flex w-9/12 mx-auto items-center gap-10 mt-10">
        <div className="h-40">
          <h1 className="text-lg tracking-wider font-bold py-4">
            Free Forever
          </h1>
          <p className="text-sm tracking-wider text-gray-500">
            Our free plan gives you unlimited team members, 3 boards, and 300+
            expert-made templates. Signing up with your work email lets you
            bring in your team faster. See our <br />
            <span className="text-primary">pricing plans</span> for more
            features.
          </p>
        </div>
        <div className="h-40">
          <h1 className="text-lg tracking-wider font-bold py-4">
            Easy integrations
          </h1>
          <p className="text-sm tracking-wider text-gray-500">
            Miro has 100+ powerful integrations with tools you already use like
            G Suite, Slack, and Jira, so your workflow is seamless. View the
            full list in our <span className="text-primary">Marketplace .</span>
          </p>
        </div>
        <div className="h-40">
          <h1 className="text-lg tracking-wider font-bold py-4 ">
            Security first
          </h1>
          <p className="text-sm tracking-wider text-gray-500">
            We treat your data like you would — with the utmost care. We follow
            industry-leading security standards and give you tools to protect
            intellectual property. Learn more at our{" "}
            <span className="text-primary">Trust Center .</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Trusted;

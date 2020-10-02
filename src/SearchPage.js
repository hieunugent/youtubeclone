import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import React from 'react'
import "./SearchPage.css"
import ChannelRow from "./ChannelRow"
import VideoRow from "./VideoRow";


function SearchPage() {
    return (
      <div className="searchPage">
        <div className="searchPage__filter">
          <TuneOutlinedIcon />
          <h2>FILTER</h2>
        </div>
        <hr />
        <ChannelRow
          image="https://yt3.ggpht.com/a/AATXAJwgOc7ltBqlegaMxNZ7Oepf43CxPJyVg3tQHkaCsA=s176-c-k-c0x00ffffff-no-rj-mo"
          channel="Bloomberg Politics"
          verified
          subs="230k"
          noOfVideos={9479}
          description="Bloomberg Politics is the destination for smart, non-partisan global political coverage, including breaking news, analysis and digital video."
        />
        <hr />
        <VideoRow
          title="Rep. Buck on Big Tech Investigations and Conservative Bias"
          subs="230k"
          views="3M Views"
          timestamp="3 days ago"
          channel="Bloomberg Politics"
          description="Oct.01 -- Rep. Ken Buck, a Republican from Colorado and ranking member on the House Antitrust Subcommittee, says that the next phase of the committee's investigations into big tech companies will likely focus on legislation, but that any new laws will likely be shaped by who controls the White House and Congress after election day. He speaks with Bloomberg's Kevin Cirilli in Washington."
          image="https://i.ytimg.com/an_webp/xMOyMuhoCJs/mqdefault_6s.webp?du=3000&sqp=CI2I2fsF&rs=AOn4CLA8_FvUEICHciTYrvp-GWe-b33Aew"
        />
        <VideoRow
          title="Pelosi Says Both Sides Far Apart on Total Amount of Stimulus"
          subs="230k"
          views="8M Views"
          timestamp="2 hours agp"
          channel="Bloomberg Politics"
          description='Oct.01 -- U.S. House Speaker Nancy Pelosi says Democrats and Republicans are still far apart on the total amount of stimulus needed in a new package. Talks continue on Capitol Hill. She appears on "Balance of Power" with David Westin.'
          image="https://i.ytimg.com/an_webp/AGIVVaIAbXM/mqdefault_6s.webp?du=3000&sqp=CJ6a2fsF&rs=AOn4CLAKFU0s6RiVwVP_15qnm7jLBpz21w"
        />
        <VideoRow
          title="Pelosi Says Republicans Offering 'Heal of the Loaf' in Stimulus Talks"
          subs="230k"
          views="3.9M Views"
          timestamp="3 hours ago"
          channel="Bloomberg Politics"
          description='Oct.01 -- U.S. House Speaker Nancy Pelosi says Republicans are not offering enough in stimulus talks. “This isn’t half a loaf. What they’re offering is the heel of the loaf,” Pelosi said. She spoke on "Balance of Power."'
          image="https://i.ytimg.com/an_webp/AGIVVaIAbXM/mqdefault_6s.webp?du=3000&sqp=CJ6a2fsF&rs=AOn4CLAKFU0s6RiVwVP_15qnm7jLBpz21w"
        />
      </div>
    );
}

export default SearchPage

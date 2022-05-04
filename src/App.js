
import './App.css';
import './Model'
import pdf from "./PF-Poster.pdf";

function App() {

  //  Set up a dictionary that for an image name it will store a filepath and the associated text/explanation

  return (
    <div className="App">
        <h1>Mathematical Modeling of Arrest Distributions in Los Angeles</h1>
        <h3>HMC Equity in Policing</h3>

        {/* TODO: Turn this into a popup */}
        <div id={'about-us'}>
            <p>We are a group of Harvey Mudd College students, the Equity in Policing Clinic Team, that spent our year working
                on this project. We worked over the course of the year putting together models, analysis, presentations, and reports
                discussing our project. This site is an accumulation of all the work we did over the 2021-2022 academic year. We are
                Chuksi Emuwa (Sprint Project Manager), Fatuma Omer (Fall Project Manager), Elakshi Shah, Robbie Fulton, and
                Samin Zachariah. Our advisors were Prof. Heather Zinn-Brooks and Prof. Darryl Yong of the HMC Mathematics Department.</p>
        </div>

        {/* TODO: What this website is section */}
        {/* TODO: navigation links/bar */}

        {/* Introduction to our project*/}
        <div id={"intro-group"}>
            <h4>The Motivation</h4>

            {/* TODO: Turn this into a popup */}
            <p>Want more information on criminalization and the police?
                Check out <a href={'https://www.prisonpolicy.org'}>the Prison Policy Initiative</a>.</p>

            <p>This project was primarily motivated by the complex history of police in the United States.
                According to <a href={'https://www.prisonpolicy.org/blog/2020/06/05/policingfacts/'}>a study</a> done by the
                Prison Policy Initiative, the Police are twice as likely to use force against people of color. This places certain
                populations, particularly people of color, at higher risk of harm. Also through our research we found that policing does
                not have as direct of a correlation to threats to public safety as we would like to think - policing is focused on
                predicting threats and often arrests are made based on profiles and not necessarily the objective fact that the individual
                committed a crime. The connection between arrests and crime is extremely complex, however we thought that if we could look
                at modeling policing, specifically arrest distributions, we might be able to find a way forward that was not prone to
                targeting people of color.</p>

            <h4>Our Project</h4>
            <p>This project used mathematical and computational modeling to try and identify factors influencing arrest distributions
               in the Los Angeles region. We used an agent-based approach to develop a model that simulated arrests across LAPD
                jurisdiction. We were then able to perform an analysis that compared our data to LAPD arrest data. Our work is outlined
                below. </p>

        </div>

        <div id={"model-group"}>
            <h4>Our Model</h4>

            {/* TODO: Turn into popup and link to datasets */}
            <p>The datasets we used: Census Data and Precinct Data</p>



        {/*   TODO: Figure out how to implement Model component */}

        </div>

        {/*    Do we want the analysis section to be a separate box to scroll through?*/}
        <div id={"analysis-group"}>
            <h4>The Analysis</h4>

            {/* TODO: Turn into popup and link to datasets */}
            <p>The dataset we used: LAPD Data </p>



            {/*   TODO: Figure out how to implement Model component */}

        </div>

        <div id={'conclusion-group'}>

        </div>


        {/* Access our Stuff at these Links */}
        <div id={"Downloads"}>
            <h4>Want more information?</h4>
            <p className={'email'}>Get in contact with us by emailing</p>
            <p style={{fontStyle: 'italic'}} className={'email'}>mathPolicingFairness-21-all-l@g.hmc.edu</p>
            <a href={pdf} className={'a-Download'}>Click here to Download our Poster</a>
            <a href={"https://github.com/elakshi16/Policing-Fairness-Clinic-2021"} className={'a-Download'}>Click here to Access our Code</a>
            {/* Insert Link to Paper if we have it*/}
            {/*<a>Click here to Download our Paper</a>*/}
        </div>


    </div>
  );
}

export default App;

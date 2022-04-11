import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import card11 from "../images/webdevlopment.svg";
import card21 from "../images/webdesign.svg";
import card31 from "../images/mobileapp.svg";
import card41 from "../images/sowfware.svg";
import card51 from "../images/uiux.svg";
import card61 from "../images/data.svg";
import card71 from "../images/admi.svg";
import card81 from "../images/blockchain.svg";

const Careerpages = () => {
  const { name } = useParams();
  console.log(name);
  return (
    <>
      <Helmet>
        <title>Career pages - JustHire</title>
      </Helmet>
      <div className="nav-margin-top">
        <div className="col-md-8 col-10 mx-auto text-center">
          <h1 className="py-md-5 py-3 heading active reveal pluse">{name}</h1>
        </div>
        <div>
          {name === "Web Development" ? (
            <div className="col-lg-8 mx-auto text-justify pb-5">
              <div className="row">
                <div className="col-4 text-center p-5">
                  <img
                    src={card11}
                    alt="img"
                    style={{ width: "100%" }}
                    className="active fade-left"
                  />
                </div>
                <div className="col-8 para-blue">
                  <p>
                    Since the commercialization of the Web, Web development has
                    been a growing industry. The growth of this industry is
                    being driven by businesses wishing to use their Web site to
                    advertise and sell products and services to customers.
                  </p>
                  <p>
                    There are many open source tools for Web development such as
                    BerkeleyDB, GlassFish, LAMP (Linux, Apache, MySQL, PHP)
                    stack and Perl/Plack. This has kept the cost of learning Web
                    development to a minimum. Another contributing factor to the
                    growth of the industry has been the rise of easy-to-use
                    WYSIWYG Web-development software, such as Adobe Dreamweaver,
                    BlueGriffon and Microsoft Visual Studio. Knowledge of
                    HyperText Markup Language (HTML) or of programming languages
                    is still required to use such software, but the basics can
                    be learned and implemented quickly.
                  </p>
                  <p>
                    An ever-growing set of tools and technologies have helped
                    developers build more dynamic and interactive Web sites.
                    Further, Web developers now help to deliver applications as
                    Web services which were traditionally only available as
                    applications on a desk-based computer. This has allowed for
                    many opportunities to decentralize information and media
                    distribution. Examples can be seen with the rise of cloud
                    services such as Adobe Creative Cloud, Dropbox and Google
                    Drive. These Web services allow users to interact with
                    applications from many locations, instead of being tied to a
                    specific workstation for their application environment.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            false
          )}
        </div>
        <div>
          {name === "Web Designing" ? (
            <div className="col-lg-8 mx-auto text-justify pb-5">
              <div className="row">
                <div className="col-4 text-center p-5">
                  <img
                    src={card21}
                    alt="img"
                    style={{ width: "100%" }}
                    className="active fade-left"
                  />
                </div>
                <div className="col-8 para-blue">
                  <p>
                    Web design encompasses many different skills and disciplines
                    in the production and maintenance of websites. The different
                    areas of web design include web graphic design; user
                    interface design (UI design); authoring, including
                    standardised code and proprietary software; user experience
                    design (UX design); and search engine optimization. Often
                    many individuals will work in teams covering different
                    aspects of the design process, although some designers will
                    cover them all. The term "web design" is normally used to
                    describe the design process relating to the front-end
                    (client side) design of a website including writing markup.
                    Web design partially overlaps web engineering in the broader
                    scope of web development. Web designers are expected to have
                    an awareness of usability and if their role involves
                    creating markup then they are also expected to be up to date
                    with web accessibility guidelines.
                  </p>
                  <p>
                    User understanding of the content of a website often depends
                    on user understanding of how the website works. This is part
                    of the user experience design. User experience is related to
                    layout, clear instructions and labeling on a website. How
                    well a user understands how they can interact on a site may
                    also depend on the interactive design of the site. If a user
                    perceives the usefulness of the website, they are more
                    likely to continue using it. Users who are skilled and well
                    versed with website use may find a more distinctive, yet
                    less intuitive or less user-friendly website interface
                    useful nonetheless. However, users with less experience are
                    less likely to see the advantages or usefulness of a less
                    intuitive website interface. This drives the trend for a
                    more universal user experience and ease of access to
                    accommodate as many users as possible regardless of user
                    skill.Much of the user experience design and interactive
                    design are considered in the user interface design..
                  </p>
                  <p>
                    Advanced interactive functions may require plug-ins if not
                    advanced coding language skills. Choosing whether or not to
                    use interactivity that requires plug-ins is a critical
                    decision in user experience design. If the plug-in doesn't
                    come pre-installed with most browsers, there's a risk that
                    the user will have neither the know how or the patience to
                    install a plug-in just to access the content. If the
                    function requires advanced coding language skills, it may be
                    too costly in either time or money to code compared to the
                    amount of enhancement the function will add to the user
                    experience. There's also a risk that advanced interactivity
                    may be incompatible with older browsers or hardware
                    configurations. Publishing a function that doesn't work
                    reliably is potentially worse for the user experience than
                    making no attempt. It depends on the target audience if it's
                    likely to be needed or worth any risks.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            false
          )}
        </div>
        <div>
          {name === "App Development" ? (
            <div className="col-lg-8 mx-auto text-justify pb-5">
              <div className="row">
                <div className="col-4 text-center p-5">
                  <img
                    src={card31}
                    alt="img"
                    style={{ width: "100%" }}
                    className="active fade-left"
                  />
                </div>
                <div className="col-8">
                  <p>
                    Mobile app development is the act or process by which a
                    mobile app is developed for mobile devices, such as personal
                    digital assistants, enterprise digital assistants or mobile
                    phones. These software applications are designed to run on
                    mobile devices, such as a smartphone or tablet computer.
                    These applications can be pre-installed on phones during
                    manufacturing platforms, or delivered as web applications
                    using server-side or client-side processing (e.g.,
                    JavaScript) to provide an "application-like" experience
                    within a web browser. Application software developers also
                    must consider a long array of screen sizes, hardware
                    specifications, and configurations because of intense
                    competition in mobile software and changes within each of
                    the platforms. Mobile app development has been steadily
                    growing, in revenues and jobs created. A 2013 analyst report
                    estimates there are 529,000 direct app economy jobs within
                    the EU then 28 members (including the UK), 60 percent of
                    which are mobile app developers
                  </p>
                  <p>
                    As part of the development process, mobile user interface
                    (UI) design is also essential in the creation of mobile
                    apps. Mobile UI considers constraints, contexts, screen,
                    input, and mobility as outlines for design. The user is
                    often the focus of interaction with their device, and the
                    interface entails components of both hardware and software.
                    User input allows for the users to manipulate a system, and
                    device's output allows the system to indicate the effects of
                    the users' manipulation. Mobile UI design constraints
                    include limited attention and form factors, such as a mobile
                    device's screen size for a user's hand(s). Mobile UI
                    contexts signal cues from user activity, such as location
                    and scheduling that can be shown from user interactions
                    within a mobile app. Overall, mobile UI design's goal is
                    mainly for an understandable, user-friendly interface.
                    Functionality is supported by mobile enterprise application
                    platforms or integrated development environments (IDEs).
                  </p>
                  <p>
                    Mobile UIs, or front-ends, rely on mobile back-ends to
                    support access to enterprise systems. The mobile back-end
                    facilitates data routing, security, authentication,
                    authorization, working off-line, and service orchestration.
                    This functionality is supported by a mix of middleware
                    components including mobile app server, mobile backend as a
                    service (MBaaS), and service-oriented architecture (SOA)
                    infrastructure.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            false
          )}
        </div>
        <div>
          {name === "Software Development" ? (
            <div className="col-lg-8 mx-auto text-justify pb-5">
              <div className="row">
                <div className="col-4 text-center p-5">
                  <img
                    src={card41}
                    alt="img"
                    style={{ width: "100%" }}
                    className="active fade-left"
                  />
                </div>
                <div className="col-8 para-blue">
                  <p>
                    Software development is the process of conceiving,
                    specifying, designing, programming, documenting, testing,
                    and bug fixing involved in creating and maintaining
                    applications, frameworks, or other software components.
                    Software development involves writing and maintaining the
                    source code, but in a broader sense, it includes all
                    processes from the conception of the desired software
                    through to the final manifestation of the software,
                    typically in a planned and structured process. Software
                    development also includes research, new development,
                    prototyping, modification, reuse, re-engineering,
                    maintenance, or any other activities that result in software
                    products.
                  </p>
                  <p>
                    The sources of ideas for software products are plentiful.
                    These ideas can come from market research including the
                    demographics of potential new customers, existing customers,
                    sales prospects who rejected the product, other internal
                    software development staff, or a creative third party. Ideas
                    for software products are usually first evaluated by
                    marketing personnel for economic feasibility, for fit with
                    existing channels distribution, for possible effects on
                    existing product lines, required features, and for fit with
                    the company's marketing objectives. In a marketing
                    evaluation phase, the cost and time assumptions become
                    evaluated. A decision is reached early in the first phase as
                    to whether, based on the more detailed information generated
                    by the marketing and development staff, the project should
                    be pursued further.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            false
          )}
        </div>
        <div>
          {name === "UI-UX designing" ? (
            <div className="col-lg-8 mx-auto text-justify pb-5">
              <div className="row">
                <div className="col-4 text-center p-5">
                  <img
                    src={card51}
                    alt="img"
                    style={{ width: "100%" }}
                    className="active fade-left"
                  />
                </div>
                <div className="col-8 para-blue">
                  <p>
                    User experience design (UX design, UXD, UED, or XD) is the
                    process of creating evidence-based, interaction designs
                    between human users and products or websites. Design
                    decisions in UX design are driven by research, data
                    analysis, and test results rather than aesthetic preferences
                    and opinions. Unlike user interface design, which focuses
                    solely on the design of a computer interface, UX design
                    encompasses all aspects of a user's perceived experience
                    with a product or website, such as its usability,
                    usefulness, desirability, brand perception, and overall
                    performance. UX design is also an element of the customer
                    experience (CX), which encompasses all aspects and stages of
                    a customer's experience and interaction with a company.
                  </p>
                  <p>
                    The field of user experience design is a conceptual design
                    discipline and has its roots in human factors and
                    ergonomics, a field that, since the late 1940s, has focused
                    on the interaction between human users, machines, and the
                    contextual environments to design systems that address the
                    user's experience. With the proliferation of workplace
                    computers in the early 1990s, user experience started to
                    become a positive insight for designers. Donald Norman, a
                    professor and researcher in design, usability, and cognitive
                    science, coined the term "user experience," and brought it
                    to a wider audience.
                  </p>
                  <p>
                    There is a debate occurring in the experience design
                    community regarding its focus, provoked in part by design
                    scholar and practitioner, Don Norman. Norman claims that
                    when designers describe people only as customers, consumers,
                    and users, designers risk diminishing their ability to do
                    good design.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            false
          )}
        </div>
        <div>
          {name === "Data Analyst" ? (
            <div className="col-lg-8 mx-auto text-justify pb-5">
              <div className="row">
                <div className="col-4 text-center p-5">
                  <img
                    src={card61}
                    alt="img"
                    style={{ width: "100%" }}
                    className="active fade-left"
                  />
                </div>
                <div className="col-8 para-blue">
                  <p>
                    Data analysis is a process of inspecting, cleansing,
                    transforming, and modelling data with the goal of
                    discovering useful information, informing conclusions, and
                    supporting decision-making. Data analysis has multiple
                    facets and approaches, encompassing diverse techniques under
                    a variety of names, and is used in different business,
                    science, and social science domains. In today's business
                    world, data analysis plays a role in making decisions more
                    scientific and helping businesses operate more effectively.
                  </p>
                  <p>
                    Data mining is a particular data analysis technique that
                    focuses on statistical modelling and knowledge discovery for
                    predictive rather than purely descriptive purposes, while
                    business intelligence covers data analysis that relies
                    heavily on aggregation, focusing mainly on business
                    information. In statistical applications, data analysis can
                    be divided into descriptive statistics, exploratory data
                    analysis (EDA), and confirmatory data analysis (CDA).EDA
                    focuses on discovering new features in the data while CDA
                    focuses on confirming or falsifying existing
                    hypotheses.Predictive analytics focuses on the application
                    of statistical models for predictive forecasting or
                    classification, while text analytics applies statistical,
                    linguistic, and structural techniques to extract and
                    classify information from textual sources, a species of
                    unstructured data. All of the above are varieties of data
                    analysis.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            false
          )}
        </div>
        <div>
          {name === "Database Administrator" ? (
            <div className="col-lg-8 mx-auto text-justify pb-5">
              <div className="row">
                <div className="col-4 text-center p-5">
                  <img
                    src={card71}
                    alt="img"
                    style={{ width: "100%" }}
                    className="active fade-left"
                  />
                </div>
                <div className="col-8 para-blue">
                  <p>
                    In computing, a database is an organized collection of data
                    stored and accessed electronically. Small databases can be
                    stored on a file system, while large databases are hosted on
                    computer clusters or cloud storage. The design of databases
                    spans formal techniques and practical considerations
                    including data modeling, efficient data representation and
                    storage, query languages, security and privacy of sensitive
                    data, and distributed computing issues including supporting
                    concurrent access and fault tolerance.
                  </p>
                  <p>
                    A database management system (DBMS) is the software that
                    interacts with end users, applications, and the database
                    itself to capture and analyze the data. The DBMS software
                    additionally encompasses the core facilities provided to
                    administer the database. The sum total of the database, the
                    DBMS and the associated applications can be referred to as a
                    database system. Often the term "database" is also used
                    loosely to refer to any of the DBMS, the database system or
                    an application associated with the database.
                  </p>
                  <p>
                    Computer scientists may classify database management systems
                    according to the database models that they support.
                    Relational databases became dominant in the 1980s. These
                    model data as rows and columns in a series of tables, and
                    the vast majority use SQL for writing and querying data. In
                    the 2000s, non-relational databases became popular,
                    collectively referred to as NoSQL because they use different
                    query languages.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            false
          )}
        </div>
        <div>
          {name === "Blockchain Development" ? (
            <div className="col-lg-8 mx-auto text-justify pb-5">
              <div className="row">
                <div className="col-4 text-center p-5">
                  <img
                    src={card81}
                    alt="img"
                    style={{ width: "100%" }}
                    className="active fade-left"
                  />
                </div>
                <div className="col-8 para-blue">
                  <p>
                    A blockchain is a growing list of records, called blocks,
                    that are linked together using cryptography. Each block
                    contains a cryptographic hash of the previous block, a
                    timestamp, and transaction data (generally represented as a
                    Merkle tree). The timestamp proves that the transaction data
                    existed when the block was published to get into its hash.
                    As blocks each contain information about the block previous
                    to it, they form a chain, with each additional block
                    reinforcing the ones before it. Therefore, blockchains are
                    resistant to modification of their data because once
                    recorded, the data in any given block cannot be altered
                    retroactively without altering all subsequent blocks.
                  </p>
                  <p>
                    Blockchains are typically managed by a peer-to-peer network
                    for use as a publicly distributed ledger, where nodes
                    collectively adhere to a protocol to communicate and
                    validate new blocks. Although blockchain records are not
                    unalterable as forks are possible, blockchains may be
                    considered secure by design and exemplify a distributed
                    computing system with high Byzantine fault tolerance.
                  </p>
                  <p>
                    The blockchain was popularized by a person (or group of
                    people) using the name Satoshi Nakamoto in 2008 to serve as
                    the public transaction ledger of the cryptocurrency bitcoin,
                    based on work by Stuart Haber, W. Scott Stornetta, and Dave
                    Bayer.[6] The identity of Satoshi Nakamoto remains unknown
                    to date. The implementation of the blockchain within bitcoin
                    made it the first digital currency to solve the
                    double-spending problem without the need of a trusted
                    authority or central server. The bitcoin design has inspired
                    other applications and blockchains that are readable by the
                    public and are widely used by cryptocurrencies. The
                    blockchain is considered a type of payment rail.
                  </p>
                  <p>
                    Private blockchains have been proposed for business use.
                    Computerworld called the marketing of such privatized
                    blockchains without a proper security model "snake oil";
                    however, others have argued that permissioned blockchains,
                    if carefully designed, may be more decentralized and
                    therefore more secure in practice than permissionless ones.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            false
          )}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Careerpages;

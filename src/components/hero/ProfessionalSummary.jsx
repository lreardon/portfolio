import React from 'react'
import BionicParagraph from '@/components/hero/BionicParagraph'

export default function ProfessionalSummary({visible}) {
    if (visible) {
        return (
            <div className='p-4'>
                <div class="flex justify-center"><a target="_blank" href="https://www.reddit.com/r/coolguides/comments/ut3x75/bionic_reading_does_this_help_you/"><strong>What the heck is this font?</strong></a></div>
                <br/>
                <BionicParagraph>
                    My coding career started off in earnest after I graduated from college, while I was living out of a van and working as a table-busser and food-runner at a local restaurant. Every morning I would wake up, pack my backpack, leave the lair, and stroll down the hill to the cafe. After ordering a cappuccino and a poppyseed bagel with cream cheese, I would sit down, open up the computer, and... learn.
                </BionicParagraph>
                <br/>
                <BionicParagraph>
                    I experimented with a wide variety of projects including a machine-learning image classification model to distinguish between trash and various types of recyclable materials (utilizing Jeremy Howard's fast.ai libraries), a Game-Of-Life-inspired automata engine with more intricate behaviors and environments, and cryptocurrency ML- and arbitrage-based trading programs (though not surprising, it was nonetheless fascinating to observe that, even in 2018, after accounting for exchange and network fees, the market was already operating at perfect efficiency).
                </BionicParagraph>
                <br/>
                <BionicParagraph>
                    In an ambitious attempt to bring substantial conversation back to popular political discourse, I built Zebra Politics, a Ruby on Rails app wherein users could view and create conversations about particular passages of federal legislation, but only while simultaneously viewing source text from actual bills and drafts. I taught myself how to set up and maintain a database with PostgreSQL, how to create a full-stack web app with Ruby on Rails, how to host applications on Heroku with a custom domain name and SSL, and how to integrate new changes automatically with a basic CI/CD pipeline.
                </BionicParagraph>
                <br/>
                <BionicParagraph>
                    After about nine months of concerted effort and continuous learning, Zebra Politics was sidelined by a four-month trip to Indonesia, during which I caught the travel bug and met many amazing people pursuing all types of unconventional lifestyles. Upon returning to the United States, I immediately moved to Santa Cruz, California and began enrollment in a Math PhD program at UCSC.
                </BionicParagraph>
                <br/>
                <BionicParagraph>
                    While in Santa Cruz, I lived in the garage of a shared house, worked at UCSC as a teaching assistant, took up surfing, took courses in algebra, analysis, and differential and algebraic geometry, co-created a short-lived vermiculture composting business, and achieved a lot of personal growth, thanks to an amazing community of friends. Eventually I exited academia with a Master's Degree, feeling drawn more to the construction of information systems than to the process of earning a PhD.
                </BionicParagraph>
                <br/>
                <BionicParagraph>
                    After finishing the graduate program, I took a job as a backend developer at IRL, then a social event-planning application that aimed to leverage the power of social networking to help people spend more time together. I participated in the standard Scrum ticket-and-sprint workflow. I had a direct advisor with whom I met for one hour a week, and I worked independently otherwise. I owned and authored many large-scope projects, including: a script to efficiently build (and refresh daily) a sitemap from the several billion records in our production database; the migration of several hundred million records from a legacy relational database to an AWS Neptune graph database and the construction of a library of Gremlin queries to read metrics from that data; a series of scripts to build demo records of every model type within the app, to provide developers with a dependable, consistent development environment; the construction of an anti-spam middleware that utilized patterns in request frequency and body-content to flag and disable malicious accounts; the construction of new endpoints from ideation to implementation, including stubs for parallel front-end development and robust test suites; an overhaul of error-reporting throughout the entire codebase to remove all instances of generic error handling. Working at IRL gave me insight into the structure of a large-scale application, both in terms of code organization and coordination among and between teams. Working on an industrial-sized application exposed me to robust design patterns that I have since incorporated into all professional and personal projects.
                </BionicParagraph>
                <br/>
                <BionicParagraph>
                    After working at IRL I moved out of the garage and into my car, and over the next 5 months road-tripped to Alaska and back, hiking, taking photos, and coding along the way. I began work on my second large independent project, a social cooking mobile app (think Spotify plus Instagram, but exclusively for recipes) on which users upload and search for recipes and organize recipes into personal and shared libraries. I worked on this project regularly for a year, and in that time I taught myself React Native for frontend mobile development. The app's backend utilizes a Ruby on Rails API, a Neo4j graph database, an Elasticsearch document database (for search), a Redis datastore for caching, a MinIO S3-compatible object storage server, and is dockerized and completely self-hosted on a DigitalOcean droplet with a capistrano CI/CD pipeline.
                </BionicParagraph>
                <br/>
                <BionicParagraph>
                    Upon returning from Alaska I embarked on a trip to South America, where I traveled in Ecuador and Colombia for 5 months, living out of my backpack, continuing to work on the cooking application when possible, and seeking out new experiences. For a month I worked on an organic farm in the Galapagos. Mornings were spent caring for coffee plants, pruning banana trees, and ducking under broad leaves when the rains hit like clockwork at 11 a.m., afternoons were spent exploring the islands, and evenings were spent continuing to learn and develop personal projects.
                </BionicParagraph>
                <br/>
                <BionicParagraph>
                    In February 2022 I was approached by a team of founders to kick off application development for Makua, a nascent startup aiming to leverage modern technology to make donating to nonprofits easy and appealing for the next generation. Provided only with a Miro Storyboard, I ideated and then built the app's API from scratch, dockerized a development environment, including seeding scripts, consulted on feature prioritization from the perspectives of userbase growth and feature complexity, and hired two full-time engineers, including pre-vetting, conducting interviews, and collaborating with the founders to reach final hiring decisions. Both engineers are still with the company, which had, within a year, already launched its application for web and iOS and onboarded dozens of nonprofits and hundreds of users.
                </BionicParagraph>
                <br/>
                <BionicParagraph>
                    Once Makua was set up for long-term success, I took a job as a commercial salmon fisherman for the summer. For three months I lived on a boat with two other people, sleeping in a bunk 18 inches high, nestled in the bow of a 38 foot Ledford. We fished for up to 5 weeks at a time, all day, every day. I learned how to excel in a strict hierarchy, when to accept orders and when to speak up. We ate fresh fish and rice daily, saw epic wildlife including dozens of Kodiak Brown Bears (the second largest bear species in the world) and Stellar Sea Lions (the largest sea lion species in the world). This was the most physically and emotionally challenging job I've ever had, and I'm grateful for it for having expanded my boundaries.
                </BionicParagraph>
                <br/>
                <BionicParagraph>
                    After finishing on the boat I took a holiday, traveling to Morocco, the Philippines, Sri Lanka, Nepal, and around Europe, surfing, seeking out waterfalls, and hiking along the way. In late February of 2023 I began coding again with some regularity and built three small web sites: a maps-based blog of my favorite waterfalls; a gallery for showcasing my favorite photos (mostly animals); and a simple Rails app allowing deckhands to review their skippers, to bring accountability to the commercial fishing industry.
                </BionicParagraph>
                <br/>
                <BionicParagraph>
                    A few months later I began working with Akada, an enterprise software company providing backend solutions to dance studios across the world. As the sole code-owner and contributor, I have built and continue to maintain and add features to two cross-platform applications, utilizing the Flutter framework (over the Dart programming language). In addition to the standard fare of software development, I've been heavily involved in all aspects of project management, including ideation, design, and personnel and project management, as we modernize their existing tech and build new products.
                </BionicParagraph>
                <br/>
                <BionicParagraph>
                    Recently I worked on two projects in separate camps of the academic space. The first is an independent research project investigating a notion of complexity for the natural numbers based on Peano arithmetic and recursion, written in Rust and incorporating finite state machines as a data-structure for efficiently querying enormous sets and maps. The second is an educational tool, called Echolect, aimed at making large lecture halls more engaging and useful for university students. Echolect incorporates the openai/whisper transcription models to create robust lecture transcripts with interpolated student interactions, for later reference by students, lecturers, teaching assistants, and retrieval-augmented generation models. The entire project is self-hosted, including a bespoke mailserver, because I wanted to learn what went into making those, too!
                </BionicParagraph>
                <br/>
                <BionicParagraph>
                    I am currently exploring LangChain to gain better facility creating useful specialized LLM-based applications and pipelines.
                </BionicParagraph>
                <br/>
                <BionicParagraph>
                    If you would like to collaborate, chat, or if you're looking for a developer for your next project, please send me an email at:
                </BionicParagraph>
                <br/>
                <div className='flex flex-row justify-center'>
                    <img src='email.svg' alt='My email address, in image form to discourage crawlers.'/>
                </div>
            </div>
        )
    }
}
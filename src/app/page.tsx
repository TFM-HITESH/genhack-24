import Navbar from '@/components/navbar/navbar';
import HeroVideo from '@/components/heroVideo/heroVideo';
import HeroPageLanding from '@/components/heroPageLanding/heroPageLanding';
import Tracks from '@/components/tracks/tracks';
import PrizePool from '@/components/prizePool/prizePool';
import Timeline from '@/components/timeline/timeline';
import TeamNRules from '@/components/teamNRules/teamNRules';
import JudgingCriteria from '@/components/judgingCriteria/judgingCriteria';
import ParticipantResources from '@/components/participantResources/participantResources';
import Faqs from '@/components/faqs/faqs';
import StayTuned from '@/components/stayTuned/stayTuned';
import Footer from '@/components/footer/footer';

export default function Home() {
    return (
        <main className="w-full p-4 md:p-10">
            <div className=" flex flex-col justify-center items-center gap-4 md:gap-10">
                <Navbar />
                <HeroVideo />
                <HeroPageLanding />
                <div className="w-full" id="tracks">
                    <Tracks />
                </div>

                <div className="w-full" id="prizepool">
                    <PrizePool />
                </div>
                <div className="w-full" id="timeline">
                    <Timeline />
                </div>

                <TeamNRules />
                <div className="w-full" id="criteria">
                    <JudgingCriteria />
                </div>

                <div className="w-full" id="resources">
                    <ParticipantResources />
                </div>

                <Faqs />
                <StayTuned />
                <Footer />
            </div>
        </main>
    );
}

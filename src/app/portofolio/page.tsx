import HomeSection from '@/components/portofolio-sections/HomeSection';
import ProjectSection from '@/components/portofolio-sections/ProjectSection';
import React from 'react';

const Portfolio: React.FC = () => {
    return (
        <div>
            <section>
                <HomeSection/>
            </section>
            <section>
                <ProjectSection/>
            </section>
        </div>
    );
};

export default Portfolio;

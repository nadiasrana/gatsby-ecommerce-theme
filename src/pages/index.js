import * as React from 'react';
import Layout from '../components/Layout/Layout';
import Container from '../components/Container';
import * as styles from './index.module.css';

const IndexPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <Container>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <p className={styles.heroLabel}>Business Analytics</p>
              <h1 className={styles.heroTitle}>Nadia Rana</h1>
              <p className={styles.heroSubtitle}>
                Incoming M.S. Business Analytics Student, Northeastern University
              </p>
              <p className={styles.heroDescription}>
                Seeking Entry-Level Marketing Analyst Position, combining data, 
                strategy, and community-driven leadership.
              </p>
              <div className={styles.heroTags}>
                <span className={styles.tag}>Raleigh, NC</span>
                <span className={styles.tag}>Business Analytics • Marketing • Operations</span>
              </div>
              <div className={styles.heroButtons}>
                <a href="#contact" className={styles.primaryButton}>
                  Get in touch
                </a>
                <a href="#experience" className={styles.secondaryButton}>
                  View experience
                </a>
              </div>
            </div>
            
            <div className={styles.heroCards}>
              <div className={styles.card}>
                <p className={styles.cardLabel}>Focus</p>
                <h3 className={styles.cardTitle}>Business Analytics & Strategy</h3>
                <p className={styles.cardText}>
                  Dual background in Biological Sciences and Business Marketing with a pivot into 
                  Business Analytics, using data to support strategic decisions.
                </p>
              </div>
              <div className={styles.card}>
                <p className={styles.cardLabel}>Leadership</p>
                <h3 className={styles.cardTitle}>Campus & Community Impact</h3>
                <p className={styles.cardText}>
                  College Senator, team manager for UOP Women's Basketball, and active leader 
                  in professional organizations.
                </p>
              </div>
              <div className={styles.card}>
                <p className={styles.cardLabel}>Service</p>
                <h3 className={styles.cardTitle}>Community Initiatives</h3>
                <p className={styles.cardText}>
                  Founder of a Dental Hygiene & Food Bags initiative delivering 1,000+ care 
                  packages to underserved communities in Lahore.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Education Section */}
      <div className={styles.section}>
        <Container>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.educationList}>
            <div className={styles.educationItem}>
              <div className={styles.educationHeader}>
                <h3>Northeastern University</h3>
                <span className={styles.date}>Jan 2026 – May 2027</span>
              </div>
              <p className={styles.degree}>M.S. – Business Analytics (Incoming)</p>
              <p className={styles.location}>Boston, MA</p>
            </div>
            <div className={styles.educationItem}>
              <div className={styles.educationHeader}>
                <h3>University of the Pacific</h3>
                <span className={styles.date}>Aug 2022 – Dec 2025</span>
              </div>
              <p className={styles.degree}>
                B.S. Biological Sciences; B.S. Business Marketing; Minor: Pre-Law
              </p>
              <p className={styles.location}>Stockton, CA</p>
              <p className={styles.gpa}>GPA: 3.85 – Dean's Honor List</p>
            </div>
          </div>
        </Container>
      </div>

      {/* Experience Section */}
      <div className={styles.sectionAlt} id="experience">
        <Container>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <div className={styles.experienceList}>
            <div className={styles.experienceCard}>
              <div className={styles.experienceHeader}>
                <div>
                  <h3 className={styles.experienceTitle}>Summer High School Assistant</h3>
                  <p className={styles.company}>University of the Pacific</p>
                </div>
                <span className={styles.experienceDate}>May 2024 – Aug 2024</span>
              </div>
              <p className={styles.experienceLocation}>Stockton, CA • 2 consecutive years</p>
              <ul className={styles.experienceList}>
                <li>Streamlined event logistics data collection for 3,000+ attendees, reducing check-in times by 15%.</li>
                <li>Designed dashboards for satisfaction, diversity, and engagement to support housing presentations.</li>
              </ul>
            </div>

            <div className={styles.experienceCard}>
              <div className={styles.experienceHeader}>
                <div>
                  <h3 className={styles.experienceTitle}>College of the Pacific Senator</h3>
                  <p className={styles.company}>Associated Students of UOP</p>
                </div>
                <span className={styles.experienceDate}>Apr 2023 – Dec 2023</span>
              </div>
              <p className={styles.experienceLocation}>Stockton, CA</p>
              <ul className={styles.experienceList}>
                <li>Represented 1,500+ students and allocated $100K+ in student funds to organizations.</li>
                <li>Developed policy recommendations on resources, parking, and housing.</li>
              </ul>
            </div>

            <div className={styles.experienceCard}>
              <div className={styles.experienceHeader}>
                <div>
                  <h3 className={styles.experienceTitle}>Team Manager</h3>
                  <p className={styles.company}>UOP Women's Basketball</p>
                </div>
                <span className={styles.experienceDate}>Sept 2023 – Present</span>
              </div>
              <p className={styles.experienceLocation}>Stockton, CA</p>
              <ul className={styles.experienceList}>
                <li>Directed logistics (travel, meals, equipment), improving efficiency by 25%.</li>
                <li>Managed budgets and coordinated resources as liaison between staff and athletes.</li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Skills Section */}
      <div className={styles.section}>
        <Container>
          <h2 className={styles.sectionTitle}>Skills & Tools</h2>
          <div className={styles.skillsGrid}>
            <div>
              <h3 className={styles.skillCategory}>Technical</h3>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>Microsoft Excel (Power Query)</span>
                <span className={styles.skillTag}>Power BI</span>
                <span className={styles.skillTag}>SPSS</span>
              </div>
            </div>
            <div>
              <h3 className={styles.skillCategory}>Professional</h3>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>Public Speaking</span>
                <span className={styles.skillTag}>Strategic Planning</span>
                <span className={styles.skillTag}>Project Management</span>
                <span className={styles.skillTag}>Operations</span>
              </div>
            </div>
            <div>
              <h3 className={styles.skillCategory}>Languages</h3>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>English (Fluent)</span>
                <span className={styles.skillTag}>Spanish (Elementary)</span>
                <span className={styles.skillTag}>Arabic (Elementary)</span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Contact Section */}
      <div className={styles.contactSection} id="contact">
        <Container>
          <h2 className={styles.contactTitle}>Interested in working together?</h2>
          <p className={styles.contactText}>
            I'm actively exploring marketing analyst and business analytics opportunities. 
            Let's connect and discuss how I can contribute to your team.
          </p>
          <div className={styles.contactButtons}>
            <a href="mailto:nadiasrana@gmail.com" className={styles.contactButton}>
              nadiasrana@gmail.com
            </a>
            <a href="https://linkedin.com/in/nadiasrana" className={styles.contactButton}>
              linkedin.com/in/nadiasrana
            </a>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default IndexPage;

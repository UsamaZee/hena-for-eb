import HeroBanner from '@/components/layout/hero2.png'

export default function WhyAmIRunning() {
  return (
    <div style={{ backgroundColor: 'var(--color-background)' }} className="min-h-screen pt-12 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <p className="section-number mb-4">My Story</p>
          <h1 className="editorial-heading text-5xl md:text-6xl leading-tight">
            Why I'm Running
          </h1>
          <img src={HeroBanner.src} alt="Candidate Photo" className="w-full h-auto rounded-lg mt-6" />
        </div>

        <div style={{ color: 'var(--color-text)' }} className="space-y-8 text-lg leading-relaxed">
          <p>
            My commitment to education runs deep. As someone who grew up in East Brunswick, graduated from our schools, and has returned to build my life here, I understand the importance of quality education to our community&apos;s future.
          </p>

          <p>
            Over the past 33 years, I&apos;ve watched our community grow and change. I&apos;ve seen the challenges our educators face and the obstacles our students overcome. Through my work in education and my involvement in local efforts, I&apos;ve come to believe that we can do better.
          </p>

          <p>
            The East Brunswick Board of Education has the power to shape the lives of thousands of students. Every decision made affects our children&apos;s futures. I&apos;m running because I believe we need fresh perspective, deep commitment, and authentic leadership grounded in our community.
          </p>

          <p>
            With five nieces and nephews whose education matters deeply to me, I have a personal stake in getting this right. I&apos;m not running for a position—I&apos;m running to serve our students and families.
          </p>

          <p>
            Together, we can create a school system where every student has the opportunity to thrive, where teachers are valued and supported, and where our community&apos;s investment in education pays dividends for generations to come.
          </p>
        </div>

        <div style={{ borderTop: '1px solid var(--color-border)' }} className="mt-16 pt-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/get-in-touch"
              className="btn btn-primary"
            >
              Get In Touch
            </a>
            <a
              href="/"
              className="btn btn-secondary"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

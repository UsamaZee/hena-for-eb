import Image from 'next/image';
import Link from 'next/link';
import HeroBanner from '@/components/layout/why-Im-running.jpg';
import JsonLd from '@/components/seo/JsonLd';
import { createPageMetadata, siteName, siteUrl } from '@/lib/seo';

export const metadata = createPageMetadata('Why Hena Mughal Is Running', 'Learn why Hena Mughal is running for the East Brunswick Board of Education and her priorities for students, educators, and the community.', '/why-am-i-running');

export default function WhyAmIRunning() {
  return (
    <div style={{ backgroundColor: 'var(--color-background)' }} className="pt-20 lg:pt-32 pb-20">
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        '@id': `${siteUrl}/why-am-i-running#webpage`,
        url: `${siteUrl}/why-am-i-running`,
        name: 'Why Hena Mughal Is Running',
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#hena-mughal` },
        breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: siteName, item: siteUrl },
          { '@type': 'ListItem', position: 2, name: "Why I'm Running", item: `${siteUrl}/why-am-i-running` },
        ] },
      }} />
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-10 md:mb-12">
          <p className="section-number mb-4">My Story</p>
          <h1 className="editorial-heading text-4xl md:text-6xl leading-tight">
            Why I&apos;m Running
          </h1>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(18rem,1fr)] lg:gap-12 xl:gap-16">
          <div className="order-2 min-w-0 space-y-7 text-justify border-accent text-lg leading-relaxed md:text-xl lg:order-1 lg:border-l-2 lg:pl-8">
            <p>
              I am running for the Board of Education because I deeply believe in the power of our robust public education system to transform the lives of our children. I have seen our district evolve over the past three decades, and my goal is to help our schools evolve with it.
            </p>

            <p>
              Given the current global environment in which the use of artificial intelligence is on the rise, our children must be equipped to adapt and grow in ways we cannot predict. They need to be able to distinguish right from wrong and truth from misinformation. I believe that students can better develop these critical thinking skills if they have a strong community foundation in which their thoughts and ideas are respected and valued. Studies have shown that children who have even one adult who believes in them and validates their input grow up to contribute meaningfully to society.
            </p>

            <p>
              While my educational experience was rigorous and challenging, I struggled with things that our children still struggle with today - validation and belonging. No matter how effective and challenging our curriculums and courses are, our education is incomplete if we fail to deliver a true sense of inclusivity to our children in what is now one of the most diverse districts in New Jersey. Particularly for student groups like special needs students who are often systematically left behind in larger school systems, it is imperative that we foster an environment of trust, care and strong community relationships so that all students can think critically and empathetically about the world they will inherit.
            </p>

            <p>
              When I was in eighth grade, my health teacher Ms. Pulowski taught me something that has stuck with me ever since: <span className='text-accent font-bold'>&ldquo;The more you know someone, the less inclined you are to make fun of them or bully them.&rdquo;</span> For me, this meant that any given situation can always be seen from more than one perspective. This is the same mindset I intend to bring to our board by creating opportunities not only for students, but for educators and community members alike to unite in pursuit of our common goal: investing in our children, who are our future.
            </p>

            <p>
              This includes investing in our High School building project to properly serve our students. As someone who regularly makes important financial decisions for my business, I will ensure that the money our town devotes to address the desperately-needed High School update will radically improve our students&rsquo; learning conditions and will future-proof our High School for generations to come.
            </p>

            <p>
              As a business owner, communicating clearly, listening carefully to those around me, and taking their feedback into account to come up with solutions is something I do on a daily basis. As a community organizer who knows what it means to have to stand up for your rights, I know how to speak to local and government officials and advocate for everyone to have a place at the table. With this experience, I am confident I will help create a climate in which every student&rsquo;s voice is heard and they are seen and appreciated for who they are.
            </p>

            <p>
              Together with our amazing students, teachers, parents, and administrators, I&rsquo;m eager to help accomplish our district&rsquo;s Strategic 2030 Plan. My identity, rooted in my immigrant family background and day-to-day experience working with a variety of people will enable me to help our students thrive in their diversity. Here&rsquo;s to our future!
            </p>

            <div className="pt-2">
              <Link
                href="/get-in-touch"
                className="btn btn-primary"
              >
                Get In Touch
              </Link>
            </div>
          </div>
          <div className="relative order-1 mx-auto aspect-square w-full max-w-2xl overflow-hidden rounded-lg border border-border bg-surface lg:order-2 lg:max-w-none">
            <Image
              src={HeroBanner}
              alt="Hena Mughal"
              fill
              priority
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover object-[50%_30%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

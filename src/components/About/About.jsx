import headshot from '../../assets/images/headshot.png';

export default function About() {
  return (
    <section id="about" className="p-2 mb-80">
      <h2 className="section-title text-3xl md:text-4xl text-center mb-8">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center">
        <div className="xl:text-lg md:w-1/2 mb-4 md:mb-0 p-2">
          <p className="mb-2">
            Hello! I&rsquo;m Erik Benedict, and I enjoy creating amazing
            experiences for people to enjoy on the internet. My passion is
            mostly with the front-end, but I do have foundations in the back-end
            as well.
          </p>
          <p className="mb-2">
            My journey into web development started where most do... Myspace. I
            felt like a wizard when editing HTML and CSS. But it wasn&rsquo;t
            until 2021 when I started taking free online courses when I fell in
            love and it became an obsession. Finally in 2023 I started pursuing
            the idea of a career as a web developer, and decide to attend UNC
            Chapel Hill&rsquo;s full-stack coding bootcamp.
          </p>
          <p>
            As a previous self employed individual contractor, I went from
            fixing up homes to building homepages, finding the same level of
            creativeness and sense of accomplishment in web development. I am
            continuously looking to expand my knowledge in front-end and
            full-stack programming to build bigger and better solutions for
            real-world problems, and to connect with like-minded developers.
          </p>
        </div>
        <div className="md:w-1/2 p-3">
          <img
            src={headshot}
            alt="headshot"
            className="max-w-xs md:max-w-sm mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
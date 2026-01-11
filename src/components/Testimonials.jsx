function Testimonials() {
  const letters = [
    {
      quote: "I sent one of Creator Agent’s pitches and got a response in 20 minutes.",
      author: 'A. Rivera',
      role: 'Lifestyle Creator',
    },
    {
      quote: 'It feels like having a manager who never sleeps — and never takes 20%.',
      author: 'J. Kim',
      role: 'Photographer',
    },
    {
      quote: 'The Correspondence Concierge rewrote my pitch. Same stats. Double the rate.',
      author: 'M. Laurent',
      role: 'Content Strategist',
    },
  ]

  return (
    <section id="testimonials" className="bg-[#0B3D2E] text-[#F6F2EA] pt-10 sm:pt-12 lg:pt-14 pb-8 sm:pb-12 lg:pb-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-6 sm:mb-7 text-center md:text-left">
          <p className="text-sm tracking-wide uppercase text-[#C8A96E]">— LETTERS OF RECOMMENDATION</p>
          <div className="mt-3 h-px bg-[#C8A96E]/30" />
          <h2 className="mt-5 text-2xl sm:text-3xl font-semibold">
            In our world, these are records of performance.
          </h2>
        </div>

        {/* Slightly increased spacing between the title block and the photo cards */}
        <div className="mt-10 sm:mt-12 grid md:grid-cols-3 gap-6 md:gap-8">
          {letters.map((q, idx) => (
            <div key={idx} className="relative">
              {/* Circle photo placeholder */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-[#EDE6D6] border-2 border-[#C8A96E] shadow-md flex items-center justify-center">
                  <span className="text-[#2F4F4F] text-[10px] sm:text-xs tracking-[0.25em] uppercase">Photo</span>
                </div>
              </div>

              {/* Testimonial card */}
              <figure className="rounded-xl border border-[#C0D5CB]/20 bg-[#0B3D2E] p-6 pt-12 text-center">
                <blockquote className="text-base sm:text-lg italic">“{q.quote}”</blockquote>
                <figcaption className="mt-4 text-sm text-[#F6F2EA]/80">
                  — {q.author}, {q.role}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

import React, { useEffect, useState } from 'react'
import { Mail, BarChart3, Users, BadgeCheck } from 'lucide-react'

// Utility: remove near-white background to transparent and keep logo marks.
function TransparentLogo({ src, alt, className }) {
  const [maskedUrl, setMaskedUrl] = useState(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    if (!src) return
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = src
    img.onload = () => {
      const w = img.naturalWidth || 300
      const h = img.naturalHeight || 100
      const canvas = document.createElement('canvas')
      canvas.width = w
      canvas.height = h
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      ctx.drawImage(img, 0, 0, w, h)
      try {
        const imageData = ctx.getImageData(0, 0, w, h)
        const data = imageData.data
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i]
          const g = data[i + 1]
          const b = data[i + 2]
          const a = data[i + 3]
          const isNearWhite = r > 240 && g > 240 && b > 240
          if (a > 0 && isNearWhite) {
            // Make near-white fully transparent
            data[i + 3] = 0
          }
        }
        ctx.putImageData(imageData, 0, 0)
        const url = canvas.toDataURL('image/png')
        setMaskedUrl(url)
      } catch (e) {
        setFailed(true)
      }
    }
    img.onerror = () => setFailed(true)
  }, [src])

  const sizeClass = className || 'max-h-full max-w-full h-10 sm:h-12 w-40 sm:w-44'

  if (failed || !maskedUrl) {
    // Fallback: show original image while loading or if masking fails
    return (
      <img src={src} alt={alt || 'Brand logo'} className={sizeClass + ' object-contain'} loading="lazy" />
    )
  }

  return (
    <img src={maskedUrl} alt={alt || 'Brand logo'} className={sizeClass + ' object-contain'} loading="lazy" />
  )
}

// Utility: remove near-white background, keep logo marks opaque, then use as a mask filled with gold.
// Fallback: original image with a gold overlay using screen blend so only dark marks tint gold (no solid bar).
function MaskedGoldLogo({ src, alt, className }) {
  const [maskedUrl, setMaskedUrl] = useState(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    if (!src) return
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = src
    img.onload = () => {
      const w = img.naturalWidth || 300
      const h = img.naturalHeight || 100
      const canvas = document.createElement('canvas')
      canvas.width = w
      canvas.height = h
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      ctx.drawImage(img, 0, 0, w, h)
      try {
        const imageData = ctx.getImageData(0, 0, w, h)
        const data = imageData.data
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i]
          const g = data[i + 1]
          const b = data[i + 2]
          const a = data[i + 3]
          const isNearWhite = r > 240 && g > 240 && b > 240
          if (a > 0) {
            // Turn near-white pixels transparent, keep the logo marks opaque
            data[i + 3] = isNearWhite ? 0 : 255
          }
        }
        ctx.putImageData(imageData, 0, 0)
        const url = canvas.toDataURL('image/png')
        setMaskedUrl(url)
      } catch (e) {
        setFailed(true)
      }
    }
    img.onerror = () => setFailed(true)
  }, [src])

  const sizeClass = className || 'max-h-full max-w-full h-10 sm:h-12 w-40 sm:w-44'

  if (failed || !maskedUrl) {
    return (
      <div className={`relative ${sizeClass} bg-white isolate`} aria-label={alt || 'Brand logo'}>
        <img src={src} alt={alt || 'Brand logo'} className="absolute inset-0 h-full w-full object-contain" loading="lazy" />
        <div
          className="absolute inset-0"
          style={{ background: '#C8A96E', mixBlendMode: 'screen', pointerEvents: 'none' }}
        />
      </div>
    )
  }

  return (
    <div
      role="img"
      aria-label={alt || 'Brand logo'}
      className={sizeClass}
      style={{
        backgroundColor: '#C8A96E',
        WebkitMaskImage: `url(${maskedUrl})`,
        maskImage: `url(${maskedUrl})`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
      }}
    />
  )
}

function Story() {
  const brands = [
    {
      image:
        'https://flamesimagestorage.blob.core.windows.net/files/0ed33a1a-0a26-452f-9f40-448fd1f618ee_1767761494334_prj_utdafphk/2deeb7c6-db6f-42d8-8bc8-ce9304b05cac-PM_LogoGraphics.png',
      alt: 'Brand logo',
    },
    {
      image:
        'https://flamesimagestorage.blob.core.windows.net/files/452bb894-fb59-4f12-b0c5-ba356ba5a467_1767764232292_prj_utdafphk/83b3f6dd-df28-42fd-8e58-d1e1cd3b550e-PM_LogoGraphics.png',
      alt: 'Artlist logo',
    },
    {
      image:
        'https://flamesimagestorage.blob.core.windows.net/files/641ed55b-3bae-4047-a27e-7e4e6526fe1c_1767768467115_prj_utdafphk/0e1f33f4-0a9f-4551-b9ae-3dbc6fe9216a-Gymshark-Logo-Designer-1.jpg',
      alt: 'Gymshark logo',
    },
    {
      image:
        'https://flamesimagestorage.blob.core.windows.net/files/c78704c4-dc84-4125-b2ff-19f5677e5942_1767776301683_prj_utdafphk/bde607e8-0e4d-48c8-93aa-d6647fb467f4-PM_LogoGraphics-3_copy_2.png',
      alt: 'Four Seasons logo',
    },
    {
      image:
        'https://flamesimagestorage.blob.core.windows.net/files/db94606a-931d-4ba0-a3bf-f15b1085980c_1767775919921_prj_utdafphk/c06e0f05-e6b6-4ee2-b6d3-53b08414ce52-PM_LogoGraphics-3_copy.png',
      alt: 'Bose logo',
    },
    {
      image:
        'https://flamesimagestorage.blob.core.windows.net/files/88a75087-6620-4825-b0e5-993d14850eac_1767776619452_prj_utdafphk/83798790-df17-4688-9e24-de31e554d2f0-PM_LogoGraphics.png',
      alt: 'Sony logo',
    },
    {
      image:
        'https://flamesimagestorage.blob.core.windows.net/files/cdeea905-c36c-43b4-9bbf-a556b9d976c4_1767777090664_prj_utdafphk/26e3dd82-e1f2-48f2-86e5-1c9bdb51aad8-PM_LogoGraphics-3_copy_3.png',
      alt: 'The North Face logo',
    },
    {
      image:
        'https://flamesimagestorage.blob.core.windows.net/files/739c7e13-dd25-4d98-ace9-9516de91af7a_1767777521383_prj_utdafphk/4af0cf6b-9758-4c77-bb41-0c171c8f010c-PM_LogoGraphics-3_copy_4.png',
      alt: 'AG1 logo',
    },
  ]

  const features = [
    {
      title: 'The Correspondence Concierge',
      icon: Mail,
      blurb:
        "Write pitches that get replies. Personalized outreach shaped by proven frameworks, so every email is worth answering.",
      emphasis: '→ Less guessing. More replies.',
      image:
        'https://flamesimagestorage.blob.core.windows.net/files/140927ad-350b-4c1c-bb30-af63877b4133_1767557734699_prj_utdafphk/c5c6f363-0c29-4044-8256-764646f02e7b-Screenshot_2026-01-04_at_11.41.28_AM.png',
      alt: 'AI-personalized outreach example',
    },
    {
      title: 'The Partnership Index',
      icon: BarChart3,
      blurb:
        "Identify where brands are under-leveraging creators and pitch what they’re missing. Uncover content gaps and partnership angles you can own.",
      emphasis: '→ Pitch with strategy.',
      image:
        'https://flamesimagestorage.blob.core.windows.net/files/9d8934e0-4a2c-4b44-ae4a-920def9ebcf8_1767557734451_prj_utdafphk/d3ebfcb5-d209-4bd2-bc62-5ccc1fbbb024-Screenshot_2026-01-04_at_11.41.47_AM.png',
      alt: 'Brand analysis with gaps and opportunities',
    },
    {
      title: 'The Contact Rolodex',
      icon: Users,
      blurb:
        'Pitch the people who greenlight deals. Direct access to 1M+ verified decision-makers, not gatekeepers.',
      emphasis: '→ Faster responses. Shorter deal cycles.',
      image:
        'https://flamesimagestorage.blob.core.windows.net/files/4059344c-17e0-4cdc-a1b0-2f4943a2dae2_1767664392677_prj_utdafphk/fab42c62-75a1-40a5-8b6a-09dd30e83203-IMB_TYq1Tt.GIF',
      alt: 'Rolodex of verified brand contacts (demo GIF)',
    },
    {
      title: 'The Deal Concierge',
      icon: BadgeCheck,
      blurb:
        'Negotiate with confidence. Guidance on every reply and counteroffer, so your work is positioned as a partnership, not a one-off post.',
      emphasis: '→ Higher rates. Better terms.',
      image:
        'https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3Njc1ODA5Mjh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
      alt: 'Live meeting script and pricing guide',
    },
  ]

  return (
    <>
      {/* Access section */}
      <section id="story-access" className="bg-[#0B3D2E] text-[#F6F2EA] py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-xs sm:text-sm tracking-[0.2em] uppercase text-[#C8A96E]">ACCESS</span>
            <span className="w-8 h-px bg-[#C8A96E]" />
            <span className="text-xs sm:text-sm tracking-[0.2em] uppercase text-[#C8A96E]">1M+ VERIFIED EMAILS</span>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-4xl font-semibold">Direct Access to Decision-Makers at Top Brands</h2>
            <p className="mt-3 text-[#F6F2EA]/90 text-base sm:text-lg leading-relaxed">
              Skip generic inboxes. Get your pitch in front of the people who can say yes.
            </p>
          </div>

          <div className="mt-8 sm:mt-10 flex justify-center">
            <div className="w-full max-w-5xl rounded-xl border border-[#F6F2EA]/20 bg-[#EDE6D6] p-3 sm:p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-6">
                {brands.map((brand, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center rounded-md bg-white/60 border border-[#C8A96E] h-24 sm:h-auto py-[18px] px-[18px] sm:py-[22px] sm:px-[22px] shadow-sm hover:bg-white transition overflow-hidden"
                  >
                    {brand.image ? (
                      idx < 2 ? (
                        <MaskedGoldLogo
                          src={brand.image}
                          alt={brand.alt}
                          className="max-h-full max-w-full h-14 sm:h-16 w-48 sm:w-52"
                        />
                      ) : idx === 2 ? (
                        <MaskedGoldLogo
                          src={brand.image}
                          alt={brand.alt}
                          className="max-h-full max-w-full h-[4rem] sm:h-[4.5rem] w-[13.5rem] sm:w-[14.5rem]"
                        />
                      ) : idx === 3 ? (
                        <MaskedGoldLogo
                          src={brand.image}
                          alt={brand.alt}
                          className="max-h-full max-w-full h-[5rem] sm:h-[6rem] w-[15.5rem] sm:w-[17.5rem]"
                        />
                      ) : idx === 4 ? (
                        <MaskedGoldLogo
                          src={brand.image}
                          alt={brand.alt}
                          className="max-h-full max-w-full h-[5rem] sm:h-[6rem] w-[15.5rem] sm:w-[17.5rem]"
                        />
                      ) : idx === 5 ? (
                        // Sony: now gold-tinted
                        <MaskedGoldLogo
                          src={brand.image}
                          alt={brand.alt}
                          className="max-h-full max-w-full h-[5rem] sm:h-[6rem] w-[15.5rem] sm:w-[17.5rem]"
                        />
                      ) : idx === 6 ? (
                        <MaskedGoldLogo
                          src={brand.image}
                          alt={brand.alt}
                          className="max-h-full max-w-full h-[5rem] sm:h-[6rem] w-[15.5rem] sm:w-[17.5rem]"
                        />
                      ) : idx === 7 ? (
                        <MaskedGoldLogo
                          src={brand.image}
                          alt={brand.alt}
                          className="max-h-full max-w-full h-[5rem] sm:h-[6rem] w-[15.5rem] sm:w-[17.5rem]"
                        />
                      ) : (
                        <MaskedGoldLogo src={brand.image} alt={brand.alt} />
                      )
                    ) : (
                      <span className="text-[#2F4F4F] text-[10px] sm:text-xs tracking-[0.25em] uppercase">Logo</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section id="story-features" className="bg-[#0B3D2E] text-[#F6F2EA] py-8 sm:py-10">
        <div className="mx-auto max-w-none px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-xs sm:text-sm tracking-[0.2em] uppercase text-[#C8A96E]">FEATURES</span>
            <span className="w-8 h-px bg-[#C8A96E]" />
            <span className="text-xs sm:text-sm tracking-[0.2em] uppercase text-[#C8A96E]">REPRESENTATION, REBUILT</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-semibold text-[#F6F2EA] mb-1 text-center">Inside the Agent Playbook</h3>
          <p className="text-[#F6F2EA]/85 text-base sm:text-lg text-center">The thinking and leverage behind better partnerships</p>

          {/* Two-across, compact cards with icon badge overlapping top center */}
          <div className="mt-10 sm:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-6 sm:gap-x-10 lg:gap-x-12 gap-y-10 sm:gap-y-16 lg:gap-y-20 justify-items-stretch">
            {features.map((f) => {
              const Icon = f.icon
              return (
                <div
                  key={f.title}
                  className="relative w-full rounded-2xl border border-[#C8A96E] bg-[#EDE6D6] pt-14 sm:pt-16 pb-7 sm:pb-8 px-5 sm:px-10 h-full shadow-sm"
                >
                  {/* optional inner offset rule to visually separate text from the border */}
                  <div className="pointer-events-none absolute inset-2 rounded-[1.25rem] border border-[#C8A96E]/30" />

                  {/* Icon badge */}
                  <div className="absolute -top-7 sm:-top-8 left-1/2 -translate-x-1/2 z-10 w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-[#C8A96E] ring-4 ring-[#EDE6D6] flex items-center justify-center shadow-md">
                    <Icon size={24} className="sm:hidden text-[#0B3D2E]" />
                    <Icon size={28} className="hidden sm:block text-[#0B3D2E]" />
                  </div>

                  <div className="relative flex flex-col items-center text-center h-full">
                    <h3 className="text-lg sm:text-2xl font-semibold text-[#0B3D2E]">{f.title}</h3>
                    <p className="mt-2 text-[#2F4F4F] text-sm sm:text-base">{f.blurb}</p>
                    <p className="mt-2 text-[#C8A96E] text-sm sm:text-base italic font-bold">{f.emphasis}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-10 sm:mt-12 flex justify-center">
            <button className="inline-flex w-full sm:w-auto items-center justify-center rounded-md border-2 border-[#C8A96E] bg-[#C8A96E] text-[#0B3D2E] px-6 py-3 font-semibold shadow-[0_2px_0_rgba(200,169,110,0.45)] hover:bg-[#C8A96E]/90 transition min-h-[44px]">
              Unlock the Rolodex
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Story

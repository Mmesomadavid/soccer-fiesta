import { useEffect, useRef } from 'react'

interface Testimonial {
  name: string
  role: string
  content: string
}

const testimonials: Testimonial[] = [
  {
    name: "David Martinez",
    role: "Drafted by Real Madrid",
    content: "Soccer Fiesta changed my life. From playing in local leagues to being scouted by Real Madrid, this platform made my dreams come true."
  },
  {
    name: "Sarah Thompson",
    role: "Signed with Manchester City",
    content: "The exposure I got through Soccer Fiesta was incredible. Their scouting platform truly bridges the gap between talented players and top clubs."
  },
  {
    name: "Carlos Rodriguez",
    role: "Drafted by Barcelona",
    content: "I couldn't believe it when Barcelona's scouts contacted me through Soccer Fiesta. This platform is revolutionizing how clubs find talent."
  },
  {
    name: "Emma Wilson",
    role: "Signed with Chelsea FC",
    content: "As a female player, I found Soccer Fiesta to be incredibly inclusive. They're truly democratizing access to professional football."
  }
]

const Testimonial = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1
      }
    }

    const intervalId = setInterval(scroll, 30)

    const handleMouseEnter = () => clearInterval(intervalId)
    const handleMouseLeave = () => setInterval(scroll, 30)

    scrollContainer.addEventListener('mouseenter', handleMouseEnter)
    scrollContainer.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      clearInterval(intervalId)
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter)
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-12">SUCCESS STORIES</h2>
        
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide"
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div 
              key={index}
              className="max-w-[400px] bg-black/30 p-8 rounded-lg flex-shrink-0"
            >
              <div className="space-y-4">
                <p className="text-gray-300 italic">{testimonial.content}</p>
                <div>
                  <p className="text-yellow-300 font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonial


"use client"

import { ContactHeroSection }  from "@/sections/contact/ContactHeroSection"
import { ContactMethodCards }   from "@/sections/contact/ContactMethodCards"
import { WhyClickDudes }        from "@/sections/contact/WhyClickDudes"
import { ContactSmartForm }     from "@/sections/contact/ContactSmartForm"
import { RevenueCalculator }    from "@/sections/contact/RevenueCalculator"
import { AdFormatsShowcase }    from "@/sections/contact/AdFormatsShowcase"
import { EligibilityChecker }   from "@/sections/contact/EligibilityChecker"
import { ContactFAQ }           from "@/sections/about/ContactFAQ"

export function ContactUsPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactMethodCards />
      <WhyClickDudes />
      <ContactSmartForm />
      <RevenueCalculator />
      <AdFormatsShowcase />
      <EligibilityChecker />
      <ContactFAQ />
    </>
  )
}

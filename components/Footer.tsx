import React from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, children }) => (
  <div className="flex flex-col gap-5">
    <h4 className="bold-18 whitespace-nowrap">{title}</h4>
    {children}
  </div>
)

const Footer: React.FC = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="/logo-no-background.png" alt="Hilink logo" width={165} height={29} />
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((column) => (
              <FooterColumn key={column.title} title={column.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link href="/">{link}</Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
              <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <li key={link.label} className="flex gap-4 md:flex-col lg:flex-row">
                    <p className="whitespace-nowrap">{link.label}:</p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">{link.value}</p>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn title={SOCIALS.title}>
              <ul className="regular-14 flex gap-4 text-gray-30">
                {SOCIALS.links.map((link) => (
                  <li key={link}>
                    <Link href="/">
                      <Image src={link} alt="Social media" width={24} height={24} />
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">
          2024 BookBite | All Rights Reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
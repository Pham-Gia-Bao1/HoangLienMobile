import { Metadata } from "next";
import icon from '../assets/images/MainLogo.png';

export const LOGO: string = process.env.LOGO || icon.src;

export function generateMetadata(pageTitle: string, pageDescription: string): Metadata {
  const defaultTitle = "Hoàng Liên mobile";

  return {
    title: {
      default: pageTitle,
      template: `${pageTitle} | ${defaultTitle}`,
      absolute: ` ${pageTitle} | ${defaultTitle} `,
    },
    description: pageDescription,
    icons: {
      icon: LOGO, // Use the .src property for the URL path
    },
  };
}

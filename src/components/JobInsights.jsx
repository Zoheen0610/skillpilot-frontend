import React from "react";
import { motion } from "framer-motion";

// Import all company logos
import infosysLogo from "../assests/logos/infosys.png";
import wiproLogo from "../assests/logos/wipro.png";
import cognizantLogo from "../assests/logos/cognizant.png";
import thoughtworksLogo from "../assests/logos/thoughtworks.png";
import zohoLogo from "../assests/logos/zoho.png";
import razorpayLogo from "../assests/logos/razorpay.png";
import freshworksLogo from "../assests/logos/freshworks.png";
import paloAltoLogo from "../assests/logos/palo-alto.png";
import ciscoLogo from "../assests/logos/cisco.png";
import ibmLogo from "../assests/logos/ibm.png";
import checkPointLogo from "../assests/logos/checkpoint.png";
import kasperskyLogo from "../assests/logos/kaspersky.png";
import deloitteLogo from "../assests/logos/deloitte.png";
import eyLogo from "../assests/logos/ey.png";
import SwiggyLogo from "../assests/logos/swiggy.png";
import ZomatoLogo from "../assests/logos/zomato.png";
import AdobeLogo from "../assests/logos/adobe.png";
import accentureLogo from "../assests/logos/accenture.png";
import microsoftLogo from "../assests/logos/microsoft.png";
import googleLogo from "../assests/logos/google.png";
import amazonLogo from "../assests/logos/amazon.png";
import metaLogo from "../assests/logos/meta.png";
import appleLogo from "../assests/logos/apple.png";
import kpmgLogo from "../assests/logos/kpmg.png";
import tcsLogo from "../assests/logos/tcs.png";
import muSigmaLogo from "../assests/logos/mu-sigma.png";
import openaiLogo from "../assests/logos/openAI.png";
import NvidiaLogo from "../assests/logos/NVIDIA.png";
import flipkartLogo from "../assests/logos/flipkart.png";
import zsAssociatesLogo from "../assests/logos/zs-associates.png";

const COMPANY_LOGOS = {
  Infosys: infosysLogo,
  Wipro: wiproLogo,
  Cognizant: cognizantLogo,
  ThoughtWorks: thoughtworksLogo,
  Zoho: zohoLogo,
  Razorpay: razorpayLogo,
  Freshworks: freshworksLogo,
  "Palo Alto Networks": paloAltoLogo,
  Cisco: ciscoLogo,
  IBM: ibmLogo,
  "Check Point": checkPointLogo,
  Kaspersky: kasperskyLogo,
  Deloitte: deloitteLogo,
  EY: eyLogo,
  Accenture: accentureLogo,
  Microsoft: microsoftLogo,
  Google: googleLogo,
  Amazon: amazonLogo,
  Meta: metaLogo,
  Apple: appleLogo,
  KPMG: kpmgLogo,
  TCS: tcsLogo,
  "Mu Sigma": muSigmaLogo,
  "ZS Associates": zsAssociatesLogo,
  "Tata Consultancy Services": tcsLogo,
  Swiggy: SwiggyLogo,
  Zomato: ZomatoLogo,
  Adobe: AdobeLogo,
  "OpenAI": openaiLogo,
  Nvidia: NvidiaLogo,
  Flipkart: flipkartLogo,
};

const JobInsights = ({ insights }) => {
  if (!insights) return null;

  const getDemandColor = (demand) => {
    switch (demand.toLowerCase()) {
      case "high":
        return "text-green-600";
      case "moderate":
        return "text-yellow-600";
      case "low":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getGrowthColor = (growth) => {
    if (
      growth.toLowerCase().includes("rapidly") ||
      growth.toLowerCase().includes("explosive")
    ) {
      return "text-green-600";
    } else if (growth.toLowerCase().includes("steady")) {
      return "text-yellow-600";
    } else {
      return "text-gray-600";
    }
  };

  const getCompanyLogo = (companyName) => {
    // Remove any suffixes like "Security" from company names
    const normalizedName = companyName.split(" ")[0];

    // Try exact match first
    if (COMPANY_LOGOS[companyName]) {
      console.log(`Found exact match for ${companyName}`);
      return COMPANY_LOGOS[companyName];
    }

    // Try normalized name
    if (COMPANY_LOGOS[normalizedName]) {
      console.log(
        `Found normalized match for ${companyName} -> ${normalizedName}`
      );
      return COMPANY_LOGOS[normalizedName];
    }

    // Try case-insensitive match
    const lowerCompanyName = companyName.toLowerCase();
    for (const [key, value] of Object.entries(COMPANY_LOGOS)) {
      if (key.toLowerCase() === lowerCompanyName) {
        console.log(
          `Found case-insensitive match for ${companyName} -> ${key}`
        );
        return value;
      }
    }

    console.log(`No logo found for ${companyName}`);
    return null;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-lg p-6 border border-white/20">
      <h2 className="text-2xl font-bold text-purple-600 mb-4">Job Insights</h2>

      {/* Demand and Growth */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-purple-50/80 backdrop-blur-sm p-4 rounded-lg border border-purple-100/50">
          <h3 className="text-lg font-medium text-purple-800 mb-2">
            Market Demand
          </h3>
          <p
            className={`text-xl font-semibold ${getDemandColor(
              insights.Demand_in_India
            )}`}
          >
            {insights.Demand_in_India}
          </p>
        </div>

        <div className="bg-purple-50/80 backdrop-blur-sm p-4 rounded-lg border border-purple-100/50">
          <h3 className="text-lg font-medium text-purple-800 mb-2">
            Growth Trend
          </h3>
          <p
            className={`text-xl font-semibold ${getGrowthColor(
              insights.Growth_in_India
            )}`}
          >
            {insights.Growth_in_India}
          </p>
        </div>
      </div>

      {/* Top Companies */}
      <div>
        <h3 className="text-lg font-medium text-purple-800 mb-3">
          Top Hiring Companies
        </h3>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {insights.Top_Companies.split(", ").map((company, index) => {
            const logoUrl = getCompanyLogo(company);
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-lg p-3 flex items-center justify-center hover:shadow-md transition-shadow"
              >
                {logoUrl ? (
                  <motion.img
                    src={logoUrl}
                    alt={`${company} logo`}
                    className="h-8 w-auto object-contain"
                    variants={floatVariants}
                    initial="initial"
                    animate="animate"
                    onError={(e) => {
                      console.log(`Error loading logo for ${company}:`, e);
                      e.target.onerror = null;
                      e.target.src =
                        "https://via.placeholder.com/100x30?text=" + company;
                    }}
                  />
                ) : (
                  <span className="text-sm font-medium text-gray-700">
                    {company}
                  </span>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default JobInsights;

/* eslint-disable jsx-a11y/alt-text */
"use client";
// import { PrivateField, additionalInfo, allSkills, personal } from "@content";
import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
  Image,
} from "@react-pdf/renderer";
import Profile from "../../image/pexels-photo-704748.webp";
import { HtmlProps } from "node_modules/react-pdf-html/dist/types/Html";
import React from "react";
import Html from "react-pdf-html";
import { htmlRenderers } from "./pdfhtml";
import resumeConfig from "../edit-me/resume-config";
import Theme from "../edit-me/resume-config";
import { contrastColor } from "../helpers/colorcontrast";
import { getAccentColor, getNeutralColor } from "../helpers/colors";
// import {
//   fullName,
//   sortedAchievements,
//   sortedProfessionalExperiences,
// } from "../helpers/utils";

const theme = resumeConfig.pdfTheme;
const albertSrc = "https://fonts.gstatic.com/s/albertsans/v1";
const jetbrainsSrc = "https://fonts.gstatic.com/s/jetbrainsmono/v18";

Font.register({
  family: "Albert Sans",
  fonts: [
    {
      fontStyle: "normal",
      fontWeight: 400,
      src: `${albertSrc}/i7dZIFdwYjGaAMFtZd_QA3xXSKZqhr-TenSHq5P_rI32TxAj1g.ttf`,
    },
    {
      fontStyle: "italic",
      fontWeight: 400,
      src: `${albertSrc}/i7dfIFdwYjGaAMFtZd_QA1Zeelmy79QJ1HOSY9AX74fybRUz1r5t.ttf`,
    },
    {
      fontStyle: "normal",
      fontWeight: 700,
      src: `${albertSrc}/i7dZIFdwYjGaAMFtZd_QA3xXSKZqhr-TenSHTJT_rI32TxAj1g.ttf`,
    },
    {
      fontStyle: "italic",
      fontWeight: 700,
      src: `${albertSrc}/i7dfIFdwYjGaAMFtZd_QA1Zeelmy79QJ1HOSY9Dw6IfybRUz1r5t.ttf`,
    },
  ],
});

Font.register({
  family: "JetBrains Mono",
  fonts: [
    {
      fontStyle: "normal",
      fontWeight: 500,
      src: `${jetbrainsSrc}/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxjPVmUsaaDhw.ttf`,
    },
  ],
});

const hyphenationCallback = (word: string) => {
  // don't hyphenate
  return [word];
};

Font.registerHyphenationCallback(hyphenationCallback);

Font.registerEmojiSource({
  format: "png",
  url: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/",
});

interface PDFProps {
  // privateInformation?: PrivateField[];
}

const fullName = "Catherin";
const personal = {
  givenName: "Stacy",
  familyName: "Fakename",
  title: "Official Job Title",
  location: "Austin, TX",
  twitterUsername: "stacy_fakename\r",
  body: {
    raw: "\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Neque viverra [justo nec ultrices](#). Urna nunc id cursus metus aliquam eleifend mi in nulla. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra.\r\n",
    html: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Neque viverra <a href="#">justo nec ultrices</a>. Urna nunc id cursus metus aliquam eleifend mi in nulla. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra.</p>',
  },
  type: "Personal",
};
const allSkills = [
  {
    title: "Proficient\r",
    body: {
      raw: "\r\nSFTP, Drafting Agreements, HSPA, International Business, Honeywell DCS, Speech Writing, TPMS, XML Schema, Swedish, HNI\r\n",
      html: "<p>SFTP, Drafting Agreements, HSPA, International Business, Honeywell DCS, Speech Writing, TPMS, XML Schema, Swedish, HNI</p>",
    },
    type: "Skill",
  },
];

const privateInformation = [
  {
    label: "WARNING\r",
    body: {
      raw: "\r\n**Please be aware** of the security concerns of commiting private information to Git, whether it is a public or a private repo. See the README for more information on using the private feature, and note that we are not responsible if your data is exposed.\r\n",
      html: "<p><strong>Please be aware</strong> of the security concerns of commiting private information to Git, whether it is a public or a private repo. See the README for more information on using the private feature, and note that we are not responsible if your data is exposed.</p>",
    },

    type: "PrivateField",
  },
];

const additionalInfo = {
  title: "Hobbies & Interests\r",
  body: {
    raw: "\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Neque viverra justo nec ultrices. Urna nunc id cursus metus aliquam eleifend mi in nulla. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra.\r\n\r\nAll Markdown files will be rendered as rich text, so you can include features such as \r\n",
    html: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Neque viverra justo nec ultrices. Urna nunc id cursus metus aliquam eleifend mi in nulla. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra.</p>\n<p>All Markdown files will be rendered as rich text, so you can include features such as .</p>",
  },

  type: "AdditionalInfo",
};

const sortedAchievements: [] = [];
const sortedProfessionalExperiences = [
  {
    title: "Official Job Title",
    organization: "Some Company",
    startDate: "August 2019\r",
    endDate: "August 2019\r",
    body: {
      raw: "\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Neque viverra justo nec ultrices. Urna nunc id cursus metus aliquam eleifend mi in nulla. Proin sagittis `nisl rhoncus mattis` rhoncus urna neque viverra. Tristique senectus et netus et malesuada fames ac. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Volutpat consequat mauris nunc congue nisi vitae suscipit. Venenatis lectus magna fringilla urna porttitor rhoncus. Id porta nibh venenatis cras. Felis bibendum ut tristique et egestas quis ipsum suspendisse.\r\n",
      html: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Neque viverra justo nec ultrices. Urna nunc id cursus metus aliquam eleifend mi in nulla. Proin sagittis <code>nisl rhoncus mattis</code> rhoncus urna neque viverra. Tristique senectus et netus et malesuada fames ac. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Volutpat consequat mauris nunc congue nisi vitae suscipit. Venenatis lectus magna fringilla urna porttitor rhoncus. Id porta nibh venenatis cras. Felis bibendum ut tristique et egestas quis ipsum suspendisse.</p>",
    },
    type: "ProfessionalExperience",
  },
];

const styles = StyleSheet.create({
  page: {
    // flexDirection: "row",
  },

  photoContainer: {
    width: "25%",
    paddingTop: 10,
  },

  sidebar: {
    display: "flex",
    backgroundColor: "#F5F5F5",
    flexDirection: "row",
    padding: 10,
  },

  heading: {
    marginBottom: 1,
  },
  heading1: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
  line: {
    height: 2,
    backgroundColor: "grey",
    marginTop: 5,
  },
  text1: {
    fontSize: 12,
    fontWeight: "bold",
  },
  text2: {
    fontSize: 10,
    margin: 2,
  },
  text3: {
    fontSize: 12,
    fontWeight: "extrabold",
  },
  text4: {
    fontSize: 10,
    margin: 2,
  },
  text5: {
    fontSize: 12,
    fontWeight: "extrabold",
  },
  text6: {
    fontSize: 10,
    margin: 2,
  },
  text7: {
    fontSize: 12,
    fontWeight: "extrabold",
  },
  text8: {
    fontSize: 10,
    minWidth: 30,
  },
  work: {
    // margin: 10,
    padding: 20,
    margin: 10,
  },
  line1: {
    height: 2,
    backgroundColor: "grey",
    marginTop: 5,
  },
  work1: {
    fontSize: 12,
    fontWeight: "extrabold",
  },

  jobTitle: {
    fontSize: 12,
    fontWeight: "extrabold",
  },
  company: {
    fontSize: 12,
    marginBottom: 2,
  },

  dates: {
    fontSize: 10,
    marginTop: 10,
  },

  description: {
    fontSize: 10,
    marginBottom: 7,
    marginTop: 5,
  },
  subheading: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5,
  },
  responsibility: {
    fontSize: 10,
    marginBottom: 2,
  },

  link: {
    fontSize: 10,
    color: "blue",
    textDecoration: "underline",
  },
  listItem: {
    flexDirection: "row",
    marginBottom: 2,
    paddingLeft: 10,
    paddingTop: 2,
  },
  bulletPoint: {
    width: 10,
    fontSize: 10,
  },
  listItemText: {
    fontSize: 10,
  },
  listItems: {
    marginBottom: 5,
    marginTop: 10,
  },
  listItemDate: {
    fontSize: 10,
    fontWeight: "bold",
  },
  listItemTitle: {
    fontSize: 10,
    // marginLeft: 10,
    fontWeight: "bold",
  },
  headings: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
    paddingTop: 10,
  },
  subheadings: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 3,
    paddingTop: 5,
  },
  listsItems: {
    flexDirection: "row",
    // marginBottom: 2,
    paddingLeft: 10,
    paddingTop: 5,
  },
  bulletPoints: {
    width: 10,
    fontSize: 10,
  },
  date: {
    fontSize: 10,
  },
});

const PDF = ({}) => {
  const year = new Date().getFullYear();

  //   console.log(data);

  return (
    // @ts-ignore
    <Document author={fullName} title={`Résume for ${fullName}, ${year}`}>
      {/* @ts-ignore */}
      <Page size="LETTER" style={styles.page}>
        <View style={styles.sidebar}>
          <View style={styles.photoContainer}>
            {/* <Text>CHEF DE PARTIE</Text>
            <Text>QATAR AIRWAYS GROUP</Text> */}
            <Image src="/images/training academy logo.png" />
          </View>

          <View style={{ width: "55%", paddingTop: 10 }}>
            <View style={styles.heading}>
              <Text style={styles.text}>Khushi Jain</Text>
              <View style={styles.line} />
            </View>

            <View style={styles.heading1}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  gap: "10",
                }}
              >
                <View
                  style={{ flexDirection: "row", justifyContent: "flex-start" }}
                >
                  <Text style={styles.text1}>Date of birth:</Text>
                  <Text style={styles.text2}>11/08/2000 |</Text>
                </View>
                <View
                  style={{ flexDirection: "row", justifyContent: "flex-start" }}
                >
                  <Text style={styles.text3}>Nationality:</Text>
                  <Text style={styles.text4}>Indian |</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row", gap: "7" }}>
                <Text style={styles.text5}>Address:</Text>
                <Text style={styles.text6}>
                  F-72, Mangal Bazar, Subhash Chowk, Laxmi Nagar, 110092, Delhi,
                  India (Home)
                </Text>
              </View>
            </View>

            <View>
              <Text style={styles.text7}>About me:</Text>
              <Text style={styles.text8}>
                Culinary professional holding passion and creativity, can
                skilfully plan menus, prepare outstanding food, managing food
                safety, manage budgets. Seeking a position in an organisation
                where I can contribute my skills and work hard.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.work}>
          <Text style={styles.work1}>WORK EXPERIENCE</Text>
          <View style={styles.line1} />

          <View style={styles.job}>
            <Text style={styles.dates}>05/08/2022 - CURRENT Doha, Qatar</Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                gap: "5",
              }}
            >
              <Text style={styles.jobTitle}>CHEF DE PARTIE</Text>
              <Text style={styles.company}>QATAR AIRWAYS GROUP</Text>
            </View>
            <View style={styles.line1} />

            <View>
              <Text style={{ fontSize: 12, fontWeight: "bold", marginTop: 5 }}>
                Qatar Airways Group:
              </Text>
              <Text style={styles.description}>
                Qatar Airways is the national airline of the State of Qatar. The
                airline's headquarters is located in Doha, and it offers
                exceptional hospitality as well as a range of lounges and
                restaurants that offer utmost comfort and luxury.
              </Text>
              <Text style={styles.description}>
                The number of chefs in the kitchen exceeds 150. Including
                commis, DCDP's and also stewards. In my role as CDP, I am
                responsible for looking over and making sure all the operation
                works smoothly for breakfast, lunch, and dinner for the entire
                operation on a daily basis. All in all, it is a very large
                cyclical operation.
              </Text>
            </View>
            <Text style={styles.subheading}>Duties & Responsibilities:</Text>
            <Text style={styles.responsibility}>
              Ensure the quality and quantity of food for lunch, afternoon tea,
              and dinner in the kitchen. Make food indents and maintain regular
              checks on the staff. Prepare the dishes and garnish and plate
              them. Ensure the kitchen is hygienic, food is safe, and the
              temperature of food is appropriate. Promoted to CDP on April 1st,
              2023.
            </Text>
            <Text
              style={{ marginTop: 10, fontSize: 10, fontWeight: "extrabold" }}
            >
              Department : Culinary | Address : Qatar | Website :{" "}
              <Text style={styles.link}>www.qatarairways.com</Text>
            </Text>
          </View>

          <View style={styles.job1}>
            <Text style={styles.dates}>07/2020 - 07/2022 Siliguri, India</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                gap: 4,
              }}
            >
              <Text style={styles.jobTitle}>COMMIS CHEF</Text>
              <Text style={styles.company}>BAKED FOR YOU (CAFE)</Text>
            </View>
            <View style={styles.line1} />
            <View>
              <Text style={{ fontSize: 12, fontWeight: "bold", marginTop: 5 }}>
                Baked For You:
              </Text>

              <Text style={styles.description}>
                Baked For You is an all-in-one Italian and global cafe,
                chocolatier, and patisserie located in West Bengal, India. The
                menu is brief and uncomplicated, offering traditional cuisines
                from all over the world. It is renowned throughout the area for
                its baked goods and sweets.
              </Text>
              <Text style={styles.subheading}>Duties & Responsibilities:</Text>
              <Text style={styles.responsibility}>
                Worked with the sous chef on creating new dishes, as well as
                creating healthy options for junk foods. Checked food quality
                and quantity. - Contributed to daily production. Collaborated
                closely with other chefs for daily operations.
              </Text>
              <Text style={styles.description}>
                Department: Culinary | Address: India
              </Text>
            </View>
          </View>
          <Text
            style={{ fontSize: 12, fontWeight: "extrabold", paddingTop: 10 }}
          >
            EDUCATION AND TRAINING
          </Text>
          <View style={styles.line1} />
          <View style={styles.job}>
            <Text style={styles.dates}>
              01/07/2018 - 10/04/2021 Maharashtra, India
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                gap: "5",
              }}
            >
              <Text style={styles.jobTitle}>
                BACHELOR OF SCIENCE IN CULINARY ARTS{" "}
              </Text>
              <Text style={styles.company}>
                Symbiosis International University
              </Text>
            </View>
            <View
              style={{ height: 1, backgroundColor: "grey", marginTop: 5 }}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              gap: 5,
            }}
          >
            <Text
              style={{ marginTop: 10, fontSize: 10, fontWeight: "extrabold" }}
            >
              Address :
            </Text>
            <Text style={{ fontSize: 10, marginTop: 10 }}>
              Pune, Maharashtra, India
            </Text>
          </View>
          <Text
            style={{ fontSize: 12, fontWeight: "extrabold", paddingTop: 10 }}
          >
            LANGUAGE SKILLS
          </Text>
          <View style={styles.line1} />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              gap: "5",
              paddingTop: 10,
            }}
          >
            <Text style={{ fontSize: 10 }}>Mother tongue(s):</Text>
            <Text style={{ fontSize: 10, fontWeight: "extrabold" }}>
              HINDI | ENGLISH
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "extrabold",
                marginTop: 25,
              }}
            >
              ADDITIONAL INFORMATION
            </Text>

            <View
              style={{ height: 2, backgroundColor: "grey", marginTop: 2 }}
            />
            <Text
              style={{
                fontSize: 12,
                fontWeight: "extrabold",
                marginTop: 10,
              }}
            >
              HOBBIES AND INTERESTS
            </Text>
            <Text style={{ marginTop: 10, fontSize: 12 }}>
              Time Utilisation
            </Text>
            <View style={styles.listItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.listItemText}>Home Decor</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.listItemText}>Paper Craft</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.listItemText}>Traveling</Text>
            </View>
          </View>
          <Text
            style={{ marginTop: 10, fontSize: 12, fontWeight: "extrabold" }}
          >
            TRAININGS AND AWARDS
          </Text>

          <View style={styles.listItems}>
            <Text style={styles.listItemDate}>12/2019 - 05/2020</Text>
            <Text style={styles.listItemTitle}>Intern, Trident, Gurgaon</Text>
          </View>
          <View style={{ height: 1, backgroundColor: "grey" }} />

          <View style={styles.listItems}>
            <Text style={styles.listItemDate}>03/2020</Text>
            <Text style={styles.listItemTitle}>
              S.O.R.E. Letter for OCLD from Trident Gurgaon
            </Text>
          </View>
          <View style={{ height: 1, backgroundColor: "grey" }} />

          <View style={styles.listItems}>
            <Text style={styles.listItemDate}>04/2019 - 06/2019</Text>
            <Text style={styles.listItemTitle}>
              Intern, Indigo Deli, Mumbai
            </Text>
          </View>
          <View style={{ height: 1, backgroundColor: "grey" }} />

          <View style={styles.listItems}>
            <Text style={styles.listItemDate}>01/2019</Text>
            <Text style={styles.listItemTitle}>
              2nd position for Ayurvedic Cuisine at the National Budding Chef’s
              Competition, Auro University
            </Text>
          </View>
          <View style={{ height: 1, backgroundColor: "grey" }} />

          <View style={styles.listItems}>
            <Text style={styles.listItemDate}>01/2019</Text>
            <Text style={styles.listItemTitle}>
              Participated in Liquid Flavours at National Budding Chef’s
              Competition, Auro University
            </Text>
          </View>
          <View style={{ height: 1, backgroundColor: "grey" }} />

          <Text style={styles.headings}>SPECIALISATION</Text>
          <Text style={styles.subheadings}>Primary Skills</Text>
          <View style={{ height: 2, backgroundColor: "grey", marginTop: 2 }} />
          <View style={styles.listsItems}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.listItemText}>Grilling</Text>
          </View>
          <View style={styles.listsItems}>
            <Text style={styles.bulletPoints}>•</Text>
            <Text style={styles.listItemText}>Sandwiches</Text>
          </View>
          <View style={styles.listsItems}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.listItemText}>Customer Interaction</Text>
          </View>

          <Text style={styles.headings}>FOOD SAFETY CERTIFICATION</Text>
          <Text style={styles.date}>2020</Text>
          <Text style={{ fontWeight: "bold", fontSize: 10 }}>Under BSI</Text>
          <View style={{ height: 1, backgroundColor: "grey", marginTop: 1 }} />

          <View style={styles.listsItems}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.listItemText}>
              HACCP Awareness Training Course
            </Text>
          </View>
          <View style={styles.listsItems}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.listItemText}>
              Contagious Disease Prevention & Control in Kitchens Training
              Course
            </Text>
          </View>
          <View style={styles.listsItems}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.listItemText}>
              Food Safety Management System (FSMS) Internal Auditor Training
              Course (ISO22000)
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDF;

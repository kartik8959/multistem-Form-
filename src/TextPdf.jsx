import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import {
  Document,
  Image,
  Note,
  Page,
  StyleSheet,
  Text,
  View,
  Font,
} from "@react-pdf/renderer";
import { PDFDownloadLink } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { backgroundColor: "#7A4988" },
  section: { color: "white", textAlign: "center", margin: 30 },
  View: { display: "flex", justifyContent: "spaceBetween" },
  table: {
    width: "100%",
  },

  row: {
    display: "flex",
    flexDirection: "row",
    borderTop: "1px solid #EEE",
    paddingTop: 8,
    paddingBottom: 8,
  },
  
  bold: {
    fontWeight: "bold",
  },
  
  Text: { width: "80%", textAlign: "left", borderBottom: "1px solid grey" },
  row2: {
    width: "15%",
  },
  textGap: {
    marginLeft: "20px",
    padding:"20px",
    width:"60px"
  }
 
});

class TestPDF extends React.Component {
  render() {

    const { staticArray } = this.props;
    const pdf = (
      <Document>
        <Page size="A4" style={styles.page}>
          <Image src="data:image/png;base64,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" />

          <View style={styles.section}>
            <Text>Personal Details</Text>
            <Text style={styles.Text}>
              First Name : <Text >{staticArray.firstName}</Text>
            </Text>
            <Text style={styles.Text}>
              Last Name  : <Text  >{staticArray.lastName}</Text>{" "}
            </Text>
            <Text style={styles.Text}>
              Occupation  : <Text >{staticArray.occupation}</Text>
            </Text>
            <Text style={styles.Text}>
              Email : <Text >{staticArray.email}</Text>
            </Text>
            <Text style={styles.Text}>
              City : <Text >{staticArray.city}</Text>
            </Text>
            <Text style={styles.Text}>
              Bio : <Text >{staticArray.bio}</Text>
            </Text>
          </View>

          <View style={styles.section}>
            <Text>Education Details</Text>
            <Text style={styles.Text}>
            Qualification : <Text >{staticArray.lastQualification}</Text>
            </Text>
            <Text style={styles.Text}>
            College  : <Text  >{staticArray.college}</Text>{" "}
            </Text>
            <Text style={styles.Text}>
            PassingYear  : <Text >{staticArray.passingYear}</Text>
            </Text>
            <Text style={styles.Text}>
            Marks : <Text >{staticArray.marks}</Text>
            </Text>
          </View>

          <View style={styles.section}>
            <Text>Professional Details</Text>
            <Text style={styles.Text}>
            current Job Role : <Text >{staticArray.currentJobRole}</Text>
            </Text>
            <Text style={styles.Text}>
            Technology  : <Text  >{staticArray.technology}</Text>{" "}
            </Text>
            <Text style={styles.Text}>
            Department  : <Text >{staticArray.department}</Text>
            </Text>
          </View>
        </Page>
      </Document>
    );
    return (
      <div>
        <PDFDownloadLink
          document={pdf}
          fileName={"kartikjodhani" + new Date().getTime() + ".pdf"}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading . . ." : "Download"
          }
        </PDFDownloadLink>
      </div>
    );
  }
}

export default TestPDF;

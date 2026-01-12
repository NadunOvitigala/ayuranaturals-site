export default function Footer() {
    return (
      <footer style={styles.footer}>
        © {new Date().getFullYear()} Ayura Naturals. All rights reserved.
      </footer>
    );
  }
  
  const styles = {
    footer: {
      textAlign: "center",
      padding: "20px",
      backgroundColor: "#f5f5f5",
      marginTop: "40px",
    },
  };
  
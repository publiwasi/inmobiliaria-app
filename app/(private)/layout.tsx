import { ThemeProvider } from "./components/ThemeProvider";

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        // enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </main>
  );
};
export default PrivateLayout;

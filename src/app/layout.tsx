import TestContextProvider from "@/contexts/testContext";

const layout = ({ children }) => (
    <TestContextProvider>{children}</TestContextProvider>
)

export default layout
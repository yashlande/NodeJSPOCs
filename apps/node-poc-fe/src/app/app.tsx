// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { Box } from '@mui/material';
import BasicMenu from './components/BasicMenu';
import AuthConfig from './projects/authPoc/AuthConfig';

export function App() {
  return (
    <Box>
      <BasicMenu/>
      <AuthConfig/>
    </Box>
    // <>
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={
    //         <AuthDashBoard/>
    //       }
    //     />
    //     <Route
    //       path="/page-2"
    //       element={
    //         <div>
    //           <Link to="/">Click here to go back to root page.</Link>
    //         </div>
    //       }
    //     />
    //   </Routes>
    //   {/* END: routes */}
    // </>
  );
}

export default App;

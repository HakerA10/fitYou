import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  AdminClientEdit,
  AdminHome,
  AdminLogin,
  AdminManagePackage,
  AdminNewPackages,
  AdminTrainerApprovel,
  AdminTrainerInfo,
  AdminUserInfo,
  AdminVideoUpload,
  ClientHome,
  ClientPlan,
  ClientPlanConformation,
  ClientVideo,
  Clogin,
  COTPLogin,
  E404,
  Home,
  Profile,
  Signup,
  TLogin,
  TOTPLogin,
  Trainer,
  TrainerDetailsView,
  TrainerVideoUpload,
  TrSignup,
} from './Pages';

function App() {
  return (
    <div className=" App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Clogin />} />
        <Route path="/trainerSignup" element={<TrSignup />} />
        <Route path="/trainerLogin" element={<TLogin />} />
        <Route path="/clientHome" element={<ClientHome />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/adminHome" element={<AdminHome />} />
        <Route path="/userInfo" element={<AdminUserInfo />} />
        <Route path="/adminClientEdit/:id" element={<AdminClientEdit />} />
        <Route path="/trainerApprovel" element={<AdminTrainerApprovel />} />
        <Route
          path="/trainerdetailsview/:id"
          element={<TrainerDetailsView />}
        />
        <Route path="/admin/videoUpload" element={<AdminVideoUpload />} />
        <Route path="/trainerInfo" element={<AdminTrainerInfo />} />
        <Route path="/admin/newPackages" element={<AdminNewPackages />} />
        <Route path="/admin/managePackage" element={<AdminManagePackage />} />
        <Route path="/plan" element={<ClientPlan />} />
        <Route path="/trainer" element={<Trainer />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/trainer/upload" element={<TrainerVideoUpload />} />
        <Route path="/Client/Video" element={<ClientVideo />} />
        <Route path="/login/ClientOTP" element={<COTPLogin />} />
        <Route path="/login/trainerOTP" element={<TOTPLogin />} />
        <Route path="/plan/buynow/:id" element={<ClientPlanConformation />} />
        <Route path="/*" element={<E404 />} />
      </Routes>
    </div>
  );
}

export default App;

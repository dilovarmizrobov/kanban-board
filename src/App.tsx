import React from 'react';
import MainLayout from "./layouts/MainLayout";
import Kanban from "./pages/kanban";

const App: React.FC = () =>  (
  <MainLayout>
      <Kanban/>
  </MainLayout>
)

export default App

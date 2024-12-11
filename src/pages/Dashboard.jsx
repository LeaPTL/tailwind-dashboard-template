import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Datepicker from '../components/Datepicker';

// import DashboardCard01 from '../partials/dashboard/DashboardCard01';
// import DashboardCard02 from '../partials/dashboard/DashboardCard02';

import Panneau01 from '../partials/panneaux/Panneau01';
import Panneau02 from '../partials/panneaux/Panneau02';
import Panneau03 from '../partials/panneaux/Panneau03';
import Compass from "../partials/panneaux/Panneau03";

function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Template ANTICOL</h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Datepicker built with React Day Picker */}
                <Datepicker align="right"/>
                {/* Ajouter un graphique */}
                <button
                    className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-gray-400">
                  <svg className="fill-current shrink-0 xs:hidden" width="16" height="16" viewBox="0 0 16 16">
                    <path
                        d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z"/>
                  </svg>
                  <span className="max-xs:sr-only">Ajouter un graphique</span>
                </button>
                {/* Bouton de sauvegarde*/}
                <button
                    className=" btn bg-gray-900 hover:bg-gray-800 text-gray-100 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-gray-400 font-bold">
                  <svg className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
                  </svg>
                </button>
              </div>

            </div>

            {/* Panneaux */}
            <div className="grid grid-cols-12 gap-6">

              {/*Histogramme*/}
              <Panneau02/>
              {/*Cap*/}
              <Compass/>
              {/*Graphique linéaire*/}
              <Panneau01/>

              {/*/!* Line chart (Acme Plus) *!/*/}
              {/*<DashboardCard01/>*/}
              {/*/!* Line chart (Acme Advanced) *!/*/}
              {/*<DashboardCard02/>*/}
              {/*/!* Line chart (Acme Professional) *!/*/}
              {/*<DashboardCard03 />*/}
              {/*/!* Bar chart (Direct vs Indirect) *!/*/}
              {/*<DashboardCard04 />*/}
              {/*/!* Line chart (Real Time Value) *!/*/}
              {/*<DashboardCard05 />*/}
              {/*/!* Doughnut chart (Top Countries) *!/*/}
              {/*<DashboardCard06 />*/}
              {/*/!* Table (Top Channels) *!/*/}
              {/*<DashboardCard07 />*/}
              {/*/!* Line chart (Sales Over Time) *!/*/}
              {/*<DashboardCard08 />*/}
              {/*/!* Stacked bar chart (Sales VS Refunds) *!/*/}
              {/*<DashboardCard09 />*/}
              {/*/!* Card (Customers) *!/*/}
              {/*<DashboardCard10 />*/}
              {/*/!* Card (Reasons for Refunds) *!/*/}
              {/*<DashboardCard11 />*/}
              {/*/!* Card (Recent Activity) *!/*/}
              {/*<DashboardCard12 />*/}
              {/*/!* Card (Income/Expenses) *!/*/}
              {/*<DashboardCard13 />*/}

            </div>

          </div>
        </main>

      </div>
    </div>
  );
}

export default Dashboard;
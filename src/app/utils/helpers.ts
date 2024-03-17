import { Router } from "@angular/router";
import { sideBar } from "./sidebar-items";
const setSavedUser = (res: any): void => {
	localStorage.setItem('user', JSON.stringify(res.user));
	localStorage.setItem('isOnline', 'true');
	localStorage.setItem('role', res.user.roles[0].name);
	localStorage.setItem('token', res.token);

};

const redirectBasedOnRole = (role: string, router: Router): void => {
	router.navigate([initialDashboard(role)]);
  };

const initialDashboard = (role: string): string => {
	switch (role) {
		case roles.PROF:
			return 'DashboardProf';
		case roles.ADMIN:
			return 'DashboardProf';
		case roles.ETUD:
			return 'welcome';
		default:
			return '404';
	}
};

const roles = {
    DEV : 'Dev',
    PROF : 'Professeur',
    ADMIN : 'Administration',
    ETUD : 'Etudiant',
}
const returnSideBarItems = (): any => {
	const role = localStorage.getItem('role');
	switch (role) {
		case roles.DEV:
			return sideBar.AdminMenu;
		case roles.PROF:
			return sideBar.ProfMenu;
		case roles.ADMIN:
			return sideBar.AdminMenu;
		case roles.ETUD:
			return sideBar.EtudMenu;
		default:
			return [];
	}
};

export const helpers = {
    setSavedUser,
    redirectBasedOnRole,
    initialDashboard,
    roles,
	returnSideBarItems
}
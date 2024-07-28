import { Router } from "@angular/router";
import { sideBar } from "./sidebar-items";
import { environment } from "src/environments/environment";
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
			return 'seance';
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

const calculateAge = (birthdate: string): number => {
    const birthDate = new Date(birthdate);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}
function baseUrl() {
	return environment.UPLOADS_URL;
}

export const helpers = {
    setSavedUser,
    redirectBasedOnRole,
    initialDashboard,
    roles,
	returnSideBarItems,
	calculateAge,
	baseUrl
}
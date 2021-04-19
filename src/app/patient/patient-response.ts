import { Patient } from './patient';
export interface PatientResponse {

    patient: Patient;
    code: number;
    description: string;
}

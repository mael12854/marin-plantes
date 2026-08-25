export type Role = 'client' | 'marin';

export interface Profile {
  id: string;
  role: Role;
  full_name: string | null;
  email: string | null;
  created_at: string;
}

export type RequestStatus = 'pending' | 'confirmed' | 'declined';

export interface PlantRequest {
  id: string;
  full_name: string;
  email: string;
  phone: string | null;
  address: string | null;
  plant_choice: string;
  message: string | null;
  status: RequestStatus;
  created_at: string;
}

export type PlantStatus = 'active' | 'archived';

export interface Plant {
  id: string;
  code: string;
  species: string;
  plot: string | null;
  planted_date: string | null;
  owner_id: string | null;
  request_id: string | null;
  status: PlantStatus;
  created_at: string;
}

export interface CameraState {
  id: true;
  frame_url: string | null;
  taken_at: string | null;
}

export interface JournalEntry {
  id: string;
  plant_id: string;
  occurred_at: string;
  action_type: string;
  description: string;
  delta: string | null;
  author: string;
  planned: boolean;
  created_at: string;
}

export interface VisitRequest {
  id: string;
  plant_id: string | null;
  requested_by: string | null;
  preferred_date: string | null;
  message: string | null;
  status: RequestStatus;
  created_at: string;
}

export interface LaunchInterface {
  mission_name: string;
  rocket?: {
    rocket_name?: string;
  };
  links?: {
    mission_patch?: string;
    mission_patch_small?: string;
  };
  details?: string;
}

export interface LaunchData {
  mission_name?: string;
  rocket_name?: string;
  mission_patch?: string;
  mission_patch_small?: string;
  details?: string;
}

/**
* This file was automatically generated by json-schema-to-typescript.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run json-schema-to-typescript to regenerate this file.
*/

export interface Experience {
  title: string;
  company: string;
  duration: {
    start: string;
    end?: string;
    [k: string]: any;
  };
  projects: Project[];
  next?: string;
  [k: string]: any;
}
export interface Project {
  id: string;
  name: string;
  tags: string[];
  [k: string]: any;
}

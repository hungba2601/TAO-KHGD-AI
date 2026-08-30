export type SchoolType = 'primary' | 'secondary' | 'high_school' | 'multi_level';

export interface AttachedFile {
  id: string;
  name: string;
  size: string;
  type: string;
  uploadedAt: string;
  content?: string;
  htmlContent?: string;
  extractedCharCount?: number;
  status?: 'reading' | 'success' | 'error';
  errorMessage?: string;
  parsedCurriculum?: CurriculumItem[];
  detectedMetadata?: {
    schoolName?: string;
    departmentName?: string;
    subject?: string;
    grade?: string;
    academicYear?: string;
  };
}

export interface ConfigFormData {
  schoolType: SchoolType;
  governingBody: string;
  schoolName: string;
  principalName: string;
  departmentName: string;
  departmentHead: string;
  teacherName: string;
  academicYear: string;
  term1Start: string;
  term1End: string;
  term2Start: string;
  term2End: string;
  grade: string;
  subject: string;
  totalClasses: number;
  totalStudents: number;
  teachersCollege: number;
  teachersUniversity: number;
  teachersMasterDoc: number;
  evalExcellent: number;
  evalGood: number;
  evalPass: number;
  evalFail: number;
  notes: string;
  attachedFiles: AttachedFile[];
}

export interface CurriculumItem {
  id: string;
  stt: number;
  topic: string;
  lessonName: string;
  periods: number;
  week: number | string;
  yccd?: string;
  equipment: string;
  location: string;
  digitalCompetency?: string;
  nlsCode?: string;
  aiCode?: string;
  notes?: string;
}

export interface EquipmentItem {
  id: string;
  stt: number;
  equipmentName: string;
  quantity: string;
  experiments: string;
  notes: string;
}

export interface ClassroomItem {
  id: string;
  stt: number;
  roomName: string;
  quantity: string;
  features: string;
  notes: string;
}

export interface AssessmentItem {
  id: string;
  stt: number;
  assessmentName: string;
  time: string;
  week: number | string;
  form: string;
  units: string;
  requirements: string;
}

export interface OtherTasks {
  advancedTraining: string;
  remedialTeaching: string;
  lessonStudyGroup: string;
  otherActivities: string;
}

export interface ActivityItem {
  id: string;
  stt: number;
  title: string;
  requirements: string;
  periods: number;
  timeline: string;
  location: string;
  host: string;
  collaborate: string;
  conditions: string;
  targetAudience?: string;
}

export interface TeacherPlanItem {
  id: string;
  stt: number;
  taskName: string;
  timeFrame: string;
  content: string;
  targets: string;
  measures: string;
}

export interface TeacherSelfTraining {
  professionalStudy: string;
  itAndAiUpskilling: string;
  homeroomWork: string;
  extraDuties: string;
}

export interface TeacherLessonPlanItem {
  id: string;
  stt: number;
  lessonName: string;
  periods: number;
  timeline: string;
  equipment: string;
  location: string;
  digitalCompetency?: string;
  nlsCode?: string;
  aiCode?: string;
  notes?: string;
}

export interface Appendix1Data {
  curriculum: CurriculumItem[];
  equipments: EquipmentItem[];
  classrooms: ClassroomItem[];
  assessments: AssessmentItem[];
  otherTasks: OtherTasks;
}

export interface Appendix2Data {
  activities: ActivityItem[];
  stemProjects: ActivityItem[];
}

export interface Appendix3Data {
  teachingPlan?: TeacherLessonPlanItem[];
  selectiveTopics?: {
    stt: number;
    topicName: string;
    periods: number;
    timeline: string;
    equipment: string;
    location: string;
  }[];
  otherDuties?: {
    advancedTraining: string;
    remedialTeaching: string;
    scienceResearch: string;
    extracurricularAndDuties: string;
  };
}

export interface PersonalPlanData {
  personalPlans: TeacherPlanItem[];
  selfTraining: TeacherSelfTraining;
}

export interface PlanData {
  config: ConfigFormData;
  appendix1: Appendix1Data;
  appendix2: Appendix2Data;
  appendix3: Appendix3Data;
  personalPlan: PersonalPlanData;
  generatedAt: string;
  summary?: string;
}

export interface GenerationStep {
  phase: number;
  title: string;
  status: 'pending' | 'running' | 'completed' | 'error';
  log: string;
  details?: string;
}

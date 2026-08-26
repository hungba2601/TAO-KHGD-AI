import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  WidthType,
  AlignmentType,
  BorderStyle,
  HeadingLevel,
  HeightRule
} from 'docx';
import { saveAs } from 'file-saver';
import { PlanData } from '../types';

const FONT_FAMILY = 'Times New Roman';

function createTitle(text: string, size = 26, isBold = true, align = AlignmentType.CENTER): Paragraph {
  return new Paragraph({
    alignment: align,
    spacing: { before: 120, after: 120 },
    children: [
      new TextRun({
        text,
        bold: isBold,
        size,
        font: FONT_FAMILY
      })
    ]
  });
}

function createHeading(text: string, level = HeadingLevel.HEADING_2): Paragraph {
  return new Paragraph({
    heading: level,
    spacing: { before: 180, after: 80 },
    children: [
      new TextRun({
        text,
        bold: true,
        size: 24,
        font: FONT_FAMILY,
        color: '000000'
      })
    ]
  });
}

function createBodyParagraph(text: string, isBold = false, isItalic = false): Paragraph {
  return new Paragraph({
    spacing: { before: 60, after: 60, line: 276 }, // 1.15 line spacing
    children: [
      new TextRun({
        text,
        bold: isBold,
        italics: isItalic,
        size: 24, // 12pt
        font: FONT_FAMILY
      })
    ]
  });
}

function createHeaderSection(config: PlanData['config']): Table {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.NONE },
      bottom: { style: BorderStyle.NONE },
      left: { style: BorderStyle.NONE },
      right: { style: BorderStyle.NONE },
      insideHorizontal: { style: BorderStyle.NONE },
      insideVertical: { style: BorderStyle.NONE }
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: 45, type: WidthType.PERCENTAGE },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: config.governingBody.toUpperCase(), bold: false, size: 22, font: FONT_FAMILY })
                ]
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: config.schoolName.toUpperCase(), bold: true, size: 22, font: FONT_FAMILY })
                ]
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: `TỔ: ${config.departmentName.toUpperCase()}`, bold: true, size: 22, font: FONT_FAMILY })
                ]
              })
            ]
          }),
          new TableCell({
            width: { size: 55, type: WidthType.PERCENTAGE },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: 'CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM', bold: true, size: 22, font: FONT_FAMILY })
                ]
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: 'Độc lập - Tự do - Hạnh phúc', bold: true, size: 22, font: FONT_FAMILY, underline: {} })
                ]
              })
            ]
          })
        ]
      })
    ]
  });
}

function createSignatureSection(config: PlanData['config']): Table {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.NONE },
      bottom: { style: BorderStyle.NONE },
      left: { style: BorderStyle.NONE },
      right: { style: BorderStyle.NONE },
      insideHorizontal: { style: BorderStyle.NONE },
      insideVertical: { style: BorderStyle.NONE }
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: 50, type: WidthType.PERCENTAGE },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: 'HIỆU TRƯỞNG DUYỆT', bold: true, size: 24, font: FONT_FAMILY })
                ]
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: '(Ký và ghi rõ họ tên, đóng dấu)', italics: true, size: 20, font: FONT_FAMILY })
                ]
              }),
              new Paragraph({ spacing: { before: 600 } }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: config.principalName, bold: true, size: 24, font: FONT_FAMILY })
                ]
              })
            ]
          }),
          new TableCell({
            width: { size: 50, type: WidthType.PERCENTAGE },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: 'TỔ TRƯỞNG CHUYÊN MÔN', bold: true, size: 24, font: FONT_FAMILY })
                ]
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: '(Ký và ghi rõ họ tên)', italics: true, size: 20, font: FONT_FAMILY })
                ]
              }),
              new Paragraph({ spacing: { before: 600 } }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: config.departmentHead, bold: true, size: 24, font: FONT_FAMILY })
                ]
              })
            ]
          })
        ]
      })
    ]
  });
}

const isEnglishSubject = (subj: string) => {
  const s = (subj || '').toLowerCase();
  return s.includes('tiếng anh') || s.includes('english') || s.includes('tieng anh');
};

const formatDocxWeek = (week: string | number, isEn: boolean): string => {
  if (!week) return isEn ? 'Week 1' : 'Tuần 1';
  const str = String(week).trim();
  const numMatch = str.match(/\d+/);
  if (isEn) {
    if (numMatch) return `Week ${numMatch[0]}`;
    return str.replace(/tuần/i, 'Week');
  } else {
    if (numMatch) return `Tuần ${numMatch[0]}`;
    return str.replace(/week/i, 'Tuần');
  }
};

const formatDocxPeriod = (periods: number, isEn: boolean): string => {
  if (isEn) {
    return `${periods} ${periods > 1 ? 'periods' : 'period'}`;
  }
  return `${periods} tiết`;
};

export async function exportAppendix1Docx(plan: PlanData): Promise<void> {
  const { config, appendix1 } = plan;
  const isPrimary = config.schoolType === 'primary';
  const circular = isPrimary ? 'Công văn 2345/BGDĐT-GDTH' : 'Công văn 5512/BGDĐT-GDTrH';
  const isEn = isEnglishSubject(config.subject);
  const isSecondaryEnglish = isEn && (config.schoolType === 'secondary' || config.schoolType === 'multi_level');

  // Table Curriculum
  const tableRows = isSecondaryEnglish
    ? [
        new TableRow({
          tableHeader: true,
          children: [
            new TableCell({ width: { size: 7, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Week', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
            new TableCell({ width: { size: 22, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Lesson', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
            new TableCell({ width: { size: 6, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Period', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
            new TableCell({ width: { size: 33, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Objectives', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
            new TableCell({ width: { size: 14, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Teaching Equipment', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
            new TableCell({ width: { size: 18, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Location & Digital Competency / AI', bold: true, font: FONT_FAMILY, size: 20 })] })] })
          ]
        }),
        ...appendix1.curriculum.map((c) => new TableRow({
          children: [
            new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: formatDocxWeek(c.week, true), font: FONT_FAMILY, size: 20 })] })] }),
            new TableCell({
              children: [
                ...(c.topic && c.topic.trim().length > 0
                  ? [
                      new Paragraph({
                        children: [new TextRun({ text: c.topic, bold: true, font: FONT_FAMILY, size: 19, color: 'B45309' })]
                      })
                    ]
                  : []),
                new Paragraph({
                  children: [new TextRun({ text: c.lessonName, font: FONT_FAMILY, size: 20 })]
                })
              ]
            }),
            new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: c.stt.toString(), font: FONT_FAMILY, size: 20 })] })] }),
            new TableCell({
              children: (() => {
                const raw = (c.yccd || '').trim();
                if (!raw) return [new Paragraph({ children: [] })];
                const lines = raw.includes('\n')
                  ? raw.split('\n').filter((l) => l.trim().length > 0)
                  : raw.split(';').map((s) => s.trim()).filter(Boolean);

                return lines.map((line) => {
                  const trimmed = line.trim();
                  if (trimmed.toLowerCase().startsWith('by the end of')) {
                    return new Paragraph({
                      spacing: { before: 30, after: 20 },
                      children: [
                        new TextRun({
                          text: trimmed,
                          bold: true,
                          font: FONT_FAMILY,
                          size: 19
                        })
                      ]
                    });
                  }
                  return new Paragraph({
                    spacing: { before: 15, after: 15 },
                    children: [
                      new TextRun({
                        text: trimmed.startsWith('-') || trimmed.startsWith('–') || trimmed.startsWith('•') ? trimmed : `– ${trimmed}`,
                        font: FONT_FAMILY,
                        size: 19
                      })
                    ]
                  });
                });
              })()
            }),
            new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: c.equipment, font: FONT_FAMILY, size: 19 })] })] }),
            new TableCell({
              children: [
                new Paragraph({
                  spacing: { before: 20, after: 20 },
                  children: [new TextRun({ text: c.location || 'English Language Lab / Classroom', bold: true, font: FONT_FAMILY, size: 19 })]
                }),
                ...(c.digitalCompetency
                  ? c.digitalCompetency
                      .split('\n')
                      .filter((l) => l.trim().length > 0)
                      .map((line) => new Paragraph({
                        spacing: { before: 20, after: 20 },
                        children: [
                          new TextRun({
                            text: line.startsWith('•') || line.startsWith('-') ? line : `• ${line}`,
                            font: FONT_FAMILY,
                            size: 18,
                            color: '047857'
                          })
                        ]
                      }))
                  : [])
              ]
            })
          ]
        }))
      ]
    : [
        new TableRow({
          tableHeader: true,
          children: [
            new TableCell({ width: { size: 5, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'STT', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
            new TableCell({ width: { size: 16, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: isEn ? 'Unit / Khung chủ đề' : 'Khung / Chủ đề', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
            new TableCell({ width: { size: 18, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: isEn ? 'Bài học / Tên bài (SGK Global Success)' : 'Bài học / Tên bài (SGK Kết nối tri thức)', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
            new TableCell({ width: { size: 6, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: isEn ? 'Số tiết (Periods)' : 'Số tiết', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
            new TableCell({ width: { size: 7, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: isEn ? 'Thời điểm (Week)' : 'Thời điểm', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
            new TableCell({ width: { size: 24, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Yêu cầu cần đạt (YCCĐ)', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
            new TableCell({ width: { size: 12, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Thiết bị dạy học', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
            new TableCell({ width: { size: 14, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Địa điểm & Năng lực số / AI', bold: true, font: FONT_FAMILY, size: 20 })] })] })
          ]
        }),
        ...appendix1.curriculum.map((c) => new TableRow({
          children: [
            new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: c.stt.toString(), font: FONT_FAMILY, size: 20 })] })] }),
            new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: c.topic, font: FONT_FAMILY, size: 19 })] })] }),
            new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: c.lessonName, bold: true, font: FONT_FAMILY, size: 20 })] })] }),
            new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: formatDocxPeriod(c.periods, isEn), font: FONT_FAMILY, size: 20 })] })] }),
            new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: formatDocxWeek(c.week, isEn), font: FONT_FAMILY, size: 20 })] })] }),
            new TableCell({
              children: (() => {
                const raw = c.yccd || 'Đạt chuẩn yêu cầu kiến thức kỹ năng theo CT GDPT 2018.';
                const lines = raw.includes('\n')
                  ? raw.split('\n').filter((l) => l.trim().length > 0)
                  : raw.split(';').map((s) => s.trim()).filter(Boolean);

                return lines.map((line) => new Paragraph({
                  spacing: { before: 40, after: 40 },
                  children: [
                    new TextRun({
                      text: line.startsWith('-') ? line : `- ${line}`,
                      font: FONT_FAMILY,
                      size: 19
                    })
                  ]
                }));
              })()
            }),
            new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: c.equipment, font: FONT_FAMILY, size: 19 })] })] }),
            new TableCell({
              children: [
                new Paragraph({
                  spacing: { before: 20, after: 20 },
                  children: [new TextRun({ text: c.location || 'Phòng học bộ môn', bold: true, font: FONT_FAMILY, size: 19 })]
                }),
                ...(c.digitalCompetency
                  ? c.digitalCompetency
                      .split('\n')
                      .filter((l) => l.trim().length > 0)
                      .map((line) => new Paragraph({
                        spacing: { before: 20, after: 20 },
                        children: [
                          new TextRun({
                            text: line.startsWith('•') || line.startsWith('-') ? line : `• ${line}`,
                            font: FONT_FAMILY,
                            size: 18,
                            color: '047857'
                          })
                        ]
                      }))
                  : [])
              ]
            })
          ]
        }))
      ];

  // Table Equipments (Mục III)
  const equipments = appendix1.equipments || [];
  const equipmentTableRows = [
    new TableRow({
      tableHeader: true,
      children: [
        new TableCell({ width: { size: 6, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'STT', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
        new TableCell({ width: { size: 30, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Tên thiết bị dạy học', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
        new TableCell({ width: { size: 14, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Số lượng', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
        new TableCell({ width: { size: 36, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Các bài thí nghiệm / thực hành tương ứng', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
        new TableCell({ width: { size: 14, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Ghi chú', bold: true, font: FONT_FAMILY, size: 20 })] })] })
      ]
    }),
    ...equipments.map((eq) => new TableRow({
      children: [
        new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: eq.stt.toString(), font: FONT_FAMILY, size: 20 })] })] }),
        new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: eq.equipmentName, bold: true, font: FONT_FAMILY, size: 20 })] })] }),
        new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: eq.quantity, font: FONT_FAMILY, size: 20 })] })] }),
        new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: eq.experiments, font: FONT_FAMILY, size: 19 })] })] }),
        new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: eq.notes, font: FONT_FAMILY, size: 19 })] })] })
      ]
    }))
  ];

  // Table Classrooms (Mục IV)
  const classrooms = appendix1.classrooms || [];
  const classroomTableRows = [
    new TableRow({
      tableHeader: true,
      children: [
        new TableCell({ width: { size: 6, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'STT', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
        new TableCell({ width: { size: 30, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Tên phòng học bộ môn', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
        new TableCell({ width: { size: 14, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Số lượng', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
        new TableCell({ width: { size: 36, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Đặc điểm, trang thiết bị nổi bật', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
        new TableCell({ width: { size: 14, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Ghi chú', bold: true, font: FONT_FAMILY, size: 20 })] })] })
      ]
    }),
    ...classrooms.map((cr) => new TableRow({
      children: [
        new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: cr.stt.toString(), font: FONT_FAMILY, size: 20 })] })] }),
        new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: cr.roomName, bold: true, font: FONT_FAMILY, size: 20 })] })] }),
        new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: cr.quantity, font: FONT_FAMILY, size: 20 })] })] }),
        new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: cr.features, font: FONT_FAMILY, size: 19 })] })] }),
        new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: cr.notes, font: FONT_FAMILY, size: 19 })] })] })
      ]
    }))
  ];

  // Table Assessments (Mục V)
  const assessments = appendix1.assessments || [];
  const assessmentTableRows = [
    new TableRow({
      tableHeader: true,
      children: [
        new TableCell({ width: { size: 6, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'STT', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
        new TableCell({ width: { size: 22, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Bài kiểm tra, đánh giá', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
        new TableCell({ width: { size: 12, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Thời gian', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
        new TableCell({ width: { size: 12, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Thời điểm', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
        new TableCell({ width: { size: 20, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Hình thức', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
        new TableCell({ width: { size: 28, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Yêu cầu cần đạt', bold: true, font: FONT_FAMILY, size: 20 })] })] })
      ]
    }),
    ...assessments.map((as) => new TableRow({
      children: [
        new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: as.stt.toString(), font: FONT_FAMILY, size: 20 })] })] }),
        new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: as.assessmentName, bold: true, font: FONT_FAMILY, size: 20 })] })] }),
        new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: as.time, font: FONT_FAMILY, size: 20 })] })] }),
        new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: formatDocxWeek(as.week, isEn), font: FONT_FAMILY, size: 20 })] })] }),
        new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: as.form, font: FONT_FAMILY, size: 19 })] })] }),
        new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: as.requirements, font: FONT_FAMILY, size: 19 })] })] })
      ]
    }))
  ];

  const doc = new Document({
    sections: [
      {
        children: [
          createHeaderSection(config),
          createTitle('PHỤ LỤC 1', 26, true),
          createTitle(`KẾ HOẠCH DẠY HỌC MÔN ${config.subject.toUpperCase()} - KHỐI ${config.grade}`, 24, true),
          createTitle(`(Kèm theo ${circular} - Năm học ${config.academicYear})`, 22, false),

          createHeading('I. ĐẶC ĐIỂM TÌNH HÌNH'),
          createBodyParagraph(`1. Số lớp: ${config.totalClasses} lớp; Tổng số học sinh: ${config.totalStudents} học sinh.`),
          createBodyParagraph(`2. Tình hình đội ngũ giáo viên: Đại học (${config.teachersUniversity}), ThS/TS (${config.teachersMasterDoc}), Cao đẳng (${config.teachersCollege}). Đánh giá chuẩn nghề nghiệp: Tốt (${config.evalExcellent}), Khá (${config.evalGood}).`),
          createBodyParagraph(`3. Thiết bị dạy học và Phòng học bộ môn: Đạt chuẩn quy định Thông tư 37/38/39 và TT 14/2020 của Bộ GD&ĐT.`),

          createHeading('II. KẾ HOẠCH DẠY HỌC (PHÂN PHỐI CHƯƠNG TRÌNH 35 TUẦN)'),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: tableRows
          }),
          ...(isSecondaryEnglish
            ? [
                new Paragraph({
                  spacing: { before: 80, after: 120 },
                  children: [
                    new TextRun({
                      text: 'Ghi chú: Tùy vào tình hình thực tế của mỗi lớp, giáo viên có thể linh động sử dụng mã NLS và các công cụ AI cho phù hợp',
                      italics: true,
                      font: FONT_FAMILY,
                      size: 19,
                      color: '475569'
                    })
                  ]
                })
              ]
            : []),

          createHeading('III. DANH MỤC THIẾT BỊ DẠY HỌC (Theo Thông tư 37/38/39/TT-BGDĐT)'),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: equipmentTableRows
          }),

          createHeading('IV. PHÒNG HỌC BỘ MÔN (Theo Thông tư 14/2020/TT-BGDĐT)'),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: classroomTableRows
          }),

          createHeading('V. KẾ HOẠCH KIỂM TRA, ĐÁNH GIÁ ĐỊNH KỲ (GK1, CK1, GK2, CK2)'),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: assessmentTableRows
          }),

          createHeading('VI. CÁC NHIỆM VỤ CHUYÊN MÔN KHÁC'),
          createBodyParagraph(`- Bồi dưỡng học sinh giỏi: ${appendix1.otherTasks?.advancedTraining || ''}`),
          createBodyParagraph(`- Phụ đạo học sinh: ${appendix1.otherTasks?.remedialTeaching || ''}`),
          createBodyParagraph(`- Sinh hoạt chuyên môn: ${appendix1.otherTasks?.lessonStudyGroup || ''}`),
          createBodyParagraph(`- Hoạt động giáo dục khác: ${appendix1.otherTasks?.otherActivities || ''}`),

          new Paragraph({ spacing: { before: 200 } }),
          createSignatureSection(config)
        ]
      }
    ]
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, `Phu-luc-1-Lop-${config.grade}-${config.subject}.docx`);
}

export async function exportAppendix2Docx(plan: PlanData): Promise<void> {
  const { config, appendix2 } = plan;

  const doc = new Document({
    sections: [
      {
        children: [
          createHeaderSection(config),
          createTitle('PHỤ LỤC 2', 26, true),
          createTitle(`KẾ HOẠCH TỔ CHỨC CÁC HOẠT ĐỘNG GIÁO DỤC CỦA TỔ CHUYÊN MÔN`, 24, true),
          createTitle(`Môn: ${config.subject} - Khối ${config.grade} - Năm học ${config.academicYear}`, 22, false),

          createHeading('I. CÁC HOẠT ĐỘNG GIÁO DỤC / TRẢI NGHIỆM SỐ & AI'),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              new TableRow({
                tableHeader: true,
                children: [
                  new TableCell({ width: { size: 6, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'STT', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ width: { size: 28, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Chủ đề / Hoạt động', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ width: { size: 8, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Số tiết', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ width: { size: 14, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Thời điểm', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ width: { size: 18, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Địa điểm / Chủ trì', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ width: { size: 26, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Yêu cầu cần đạt & CSVC', bold: true, font: FONT_FAMILY, size: 20 })] })] })
                ]
              }),
              ...appendix2.activities.map((a) => new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: a.stt.toString(), font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: a.title, bold: true, font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: `${a.periods} tiết`, font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: a.timeline, font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: `${a.location} - Chủ trì: ${a.host}`, font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: `${a.requirements} (CSVC: ${a.conditions})`, font: FONT_FAMILY, size: 20 })] })] })
                ]
              }))
            ]
          }),

          createHeading('II. CHUYÊN ĐỀ DỰ ÁN STEM LIÊN MÔN'),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              new TableRow({
                tableHeader: true,
                children: [
                  new TableCell({ width: { size: 6, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'STT', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ width: { size: 30, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Tên Dự án STEM', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ width: { size: 8, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Thời lượng', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ width: { size: 16, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Thời điểm / Nơi thực hiện', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ width: { size: 40, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Mục tiêu & Vật liệu chế tạo', bold: true, font: FONT_FAMILY, size: 20 })] })] })
                ]
              }),
              ...appendix2.stemProjects.map((s) => new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: s.stt.toString(), font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: s.title, bold: true, font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: `${s.periods} tiết`, font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: `${s.timeline} (${s.location})`, font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: `${s.requirements} - Vật liệu: ${s.conditions}`, font: FONT_FAMILY, size: 20 })] })] })
                ]
              }))
            ]
          }),

          new Paragraph({ spacing: { before: 200 } }),
          createSignatureSection(config)
        ]
      }
    ]
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, `Phu-luc-2-Hoat-dong-STEM-Lop-${config.grade}-${config.subject}.docx`);
}

export async function exportAppendix3Docx(plan: PlanData): Promise<void> {
  const { config, appendix1, appendix3 } = plan;
  const isEn =
    config.subject.toLowerCase().includes('tiếng anh') ||
    config.subject.toLowerCase().includes('english') ||
    config.subject.toLowerCase().includes('tieng anh');

  const teachingItems =
    appendix3.teachingPlan && appendix3.teachingPlan.length > 0
      ? appendix3.teachingPlan
      : appendix1.curriculum.map((c, index) => ({
          id: `tp-${c.id || index + 1}`,
          stt: index + 1,
          lessonName: c.lessonName,
          periods: c.periods,
          timeline: typeof c.week === 'number' ? (isEn ? `Week ${c.week}` : `Tuần ${c.week}`) : c.week,
          equipment: c.equipment || 'Máy tính, máy chiếu/Tivi, SGK, phần mềm dạy học',
          location: c.location || (config.schoolType === 'primary' ? 'Phòng học Tiếng Anh/Tin học' : 'Phòng học bộ môn'),
          notes: c.notes || ''
        }));

  const otherDuties = appendix3.otherDuties || {
    advancedTraining: appendix1.otherTasks.advancedTraining,
    remedialTeaching: appendix1.otherTasks.remedialTeaching,
    scienceResearch: isEn
      ? `Guide students in scientific research projects, STEM creations and digital AI applications.`
      : `Hướng dẫn học sinh nghiên cứu khoa học kỹ thuật, sáng tạo sản phẩm STEM và ứng dụng công nghệ số / AI cấp trường.`,
    extracurricularAndDuties: appendix1.otherTasks.otherActivities
  };

  const doc = new Document({
    sections: [
      {
        children: [
          createHeaderSection(config),
          createTitle('PHỤ LỤC 3', 26, true),
          createTitle('KẾ HOẠCH GIÁO DỤC CỦA GIÁO VIÊN', 24, true),
          createTitle(`MÔN HỌC/HOẠT ĐỘNG GIÁO DỤC: ${config.subject.toUpperCase()}, LỚP: ${config.grade}`, 22, true),
          createTitle(`Họ và tên giáo viên: ${config.teacherName} - Năm học: ${config.academicYear}`, 20, false),

          createHeading('I. KẾ HOẠCH DẠY HỌC'),
          createHeading('1. Phân phối chương trình'),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              new TableRow({
                tableHeader: true,
                children: [
                  new TableCell({ width: { size: 6, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'STT', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ width: { size: 34, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Bài học', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ width: { size: 8, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Số tiết', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ width: { size: 14, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Thời điểm', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ width: { size: 20, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Thiết bị dạy học', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ width: { size: 18, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Địa điểm dạy học', bold: true, font: FONT_FAMILY, size: 20 })] })] })
                ]
              }),
              ...teachingItems.map((item) => new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: item.stt.toString(), font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: item.lessonName, bold: true, font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: item.periods.toString(), font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: item.timeline, font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: item.equipment, font: FONT_FAMILY, size: 18 })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: item.location, font: FONT_FAMILY, size: 18 })] })] })
                ]
              }))
            ]
          }),

          createHeading('II. NHIỆM VỤ KHÁC (NẾU CÓ)'),
          createBodyParagraph(`1. Bồi dưỡng học sinh giỏi: ${otherDuties.advancedTraining}`),
          createBodyParagraph(`2. Phụ đạo học sinh cần hỗ trợ: ${otherDuties.remedialTeaching}`),
          createBodyParagraph(`3. Hướng dẫn nghiên cứu KHKT / STEM & AI: ${otherDuties.scienceResearch}`),
          createBodyParagraph(`4. Hoạt động trải nghiệm & nhiệm vụ kiêm nhiệm: ${otherDuties.extracurricularAndDuties}`),

          new Paragraph({ spacing: { before: 200 } }),
          createSignatureSection(config)
        ]
      }
    ]
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, `Phu-luc-3-KHGD-Giao-vien-Lop-${config.grade}-${config.subject}.docx`);
}

export async function exportPersonalPlanDocx(plan: PlanData): Promise<void> {
  const { config, personalPlan } = plan;

  const doc = new Document({
    sections: [
      {
        children: [
          createHeaderSection(config),
          createTitle('PHỤ LỤC', 26, true),
          createTitle('KẾ HOẠCH CÁ NHÂN CỦA GIÁO VIÊN', 24, true),
          createTitle(`Họ và tên giáo viên: ${config.teacherName} - Môn: ${config.subject} - Năm học: ${config.academicYear}`, 22, false),

          createHeading('I. KẾ HOẠCH THỰC HIỆN NHIỆM VỤ GIẢNG DẠY VÀ GIÁO DỤC'),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              new TableRow({
                tableHeader: true,
                children: [
                  new TableCell({ width: { size: 6, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'STT', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ width: { size: 24, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Nhiệm vụ', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ width: { size: 14, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Thời gian', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ width: { size: 28, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Chỉ tiêu phấn đấu', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ width: { size: 28, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Biện pháp thực hiện', bold: true, font: FONT_FAMILY, size: 20 })] })] })
                ]
              }),
              ...personalPlan.personalPlans.map((p) => new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: p.stt.toString(), font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: p.taskName, bold: true, font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: p.timeFrame, font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: p.targets, font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: p.measures, font: FONT_FAMILY, size: 20 })] })] })
                ]
              }))
            ]
          }),

          createHeading('II. KẾ HOẠCH TỰ HỌC, BỒI DƯỠNG THƯỜNG XUYÊN & NÂNG CAO NĂNG LỰC AI'),
          createBodyParagraph(`1. Tự bồi dưỡng chuyên môn & nghiệp vụ: ${personalPlan.selfTraining.professionalStudy}`),
          createBodyParagraph(`2. Nâng cao năng lực số & Trí tuệ nhân tạo (AI): ${personalPlan.selfTraining.itAndAiUpskilling}`),
          createBodyParagraph(`3. Công tác chủ nhiệm & phụ huynh: ${personalPlan.selfTraining.homeroomWork}`),
          createBodyParagraph(`4. Các nhiệm vụ kiêm nhiệm khác: ${personalPlan.selfTraining.extraDuties}`),

          new Paragraph({ spacing: { before: 200 } }),
          createSignatureSection(config)
        ]
      }
    ]
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, `Phu-luc-Ke-hoach-ca-nhan-GV-${config.teacherName}-${config.subject}.docx`);
}

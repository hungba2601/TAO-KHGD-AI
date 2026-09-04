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
  HeadingLevel
} from 'docx';
import { saveAs } from 'file-saver';
import { PlanData } from '../types';
import { getNlsCodeForSubjectLesson } from './constants/nlsGuides';
import { getAiCodeForSubjectLesson } from './constants/aiGuides';
import { getSelectiveTopicsBySubjectAndGrade } from './curriculum/selectiveTopics';

const FONT_FAMILY = 'Times New Roman';

function createTitle(text: string, size = 26, isBold = true, align = AlignmentType.CENTER): Paragraph {
  return new Paragraph({
    alignment: align,
    spacing: { before: 80, after: 80 },
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

function createHeading(text: string, level: any = HeadingLevel.HEADING_2): Paragraph {
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
    spacing: { before: 50, after: 50, line: 276 }, // 1.15 line spacing
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

function createFootnoteParagraph(text: string): Paragraph {
  return new Paragraph({
    spacing: { before: 30, after: 30, line: 240 },
    children: [
      new TextRun({
        text,
        italics: true,
        size: 20, // 10pt
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
                  new TextRun({ text: `TRƯỜNG: ${config.schoolName.toUpperCase()}`, bold: true, size: 22, font: FONT_FAMILY })
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

function createHeaderSectionWithTeacher(config: PlanData['config']): Table {
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
            width: { size: 48, type: WidthType.PERCENTAGE },
            children: [
              new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [
                  new TextRun({ text: `TRƯỜNG: `, bold: true, size: 22, font: FONT_FAMILY }),
                  new TextRun({ text: config.schoolName.toUpperCase(), bold: true, size: 22, font: FONT_FAMILY })
                ]
              }),
              new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [
                  new TextRun({ text: `TỔ: `, bold: true, size: 22, font: FONT_FAMILY }),
                  new TextRun({ text: config.departmentName.toUpperCase(), bold: true, size: 22, font: FONT_FAMILY })
                ]
              }),
              new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [
                  new TextRun({ text: `Họ và tên giáo viên: `, size: 22, font: FONT_FAMILY }),
                  new TextRun({ text: config.teacherName, bold: true, size: 22, font: FONT_FAMILY })
                ]
              })
            ]
          }),
          new TableCell({
            width: { size: 52, type: WidthType.PERCENTAGE },
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

function createAppendix1SignatureSection(config: PlanData['config']): Table {
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
                  new TextRun({ text: 'TỔ TRƯỞNG', bold: true, size: 24, font: FONT_FAMILY })
                ]
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: '(Ký và ghi rõ họ tên)', italics: true, size: 20, font: FONT_FAMILY })
                ]
              }),
              new Paragraph({ spacing: { before: 650 } }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: config.departmentHead, bold: true, size: 24, font: FONT_FAMILY })
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
                  new TextRun({ text: '..., ngày ...... tháng ...... năm 20...', italics: true, size: 20, font: FONT_FAMILY })
                ]
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: 'HIỆU TRƯỞNG', bold: true, size: 24, font: FONT_FAMILY })
                ]
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: '(Ký và ghi rõ họ tên)', italics: true, size: 20, font: FONT_FAMILY })
                ]
              }),
              new Paragraph({ spacing: { before: 550 } }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: config.principalName, bold: true, size: 24, font: FONT_FAMILY })
                ]
              })
            ]
          })
        ]
      })
    ]
  });
}

function createAppendix3SignatureSection(config: PlanData['config']): Table {
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
                  new TextRun({ text: 'TỔ TRƯỞNG', bold: true, size: 24, font: FONT_FAMILY })
                ]
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: '(Ký và ghi rõ họ tên)', italics: true, size: 20, font: FONT_FAMILY })
                ]
              }),
              new Paragraph({ spacing: { before: 650 } }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: config.departmentHead, bold: true, size: 24, font: FONT_FAMILY })
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
                  new TextRun({ text: '... ngày ...... tháng ...... năm 20...', italics: true, size: 20, font: FONT_FAMILY })
                ]
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: 'GIÁO VIÊN', bold: true, size: 24, font: FONT_FAMILY })
                ]
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: '(Ký và ghi rõ họ tên)', italics: true, size: 20, font: FONT_FAMILY })
                ]
              }),
              new Paragraph({ spacing: { before: 550 } }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: config.teacherName, bold: true, size: 24, font: FONT_FAMILY })
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
  return `${periods}`;
};

function resolveDigitalCompForDocx(
  item: { lessonName: string; digitalCompetency?: string; topic?: string; yccd?: string },
  index: number,
  config: PlanData['config'],
  isEn: boolean
): string {
  // 1. Nếu là tiết Kiểm tra, Đánh giá -> Tuyệt đối KHÔNG tích hợp NLS và AI
  const topicUpper = (item.topic || '').toUpperCase();
  const nameLower = (item.lessonName || '').toLowerCase();
  const isAssessment =
    topicUpper.includes('ĐG') ||
    topicUpper.includes('KT') ||
    topicUpper.includes('ĐÁNH GIÁ') ||
    topicUpper.includes('KIỂM TRA') ||
    topicUpper.includes('ASSESSMENT') ||
    topicUpper.includes('TEST') ||
    nameLower.includes('đánh giá giữa') ||
    nameLower.includes('đánh giá cuối') ||
    nameLower.includes('kiểm tra giữa') ||
    nameLower.includes('kiểm tra cuối') ||
    nameLower.includes('kiểm tra, đánh giá') ||
    nameLower.includes('kiểm tra định kỳ');

  if (isAssessment) {
    return '';
  }

  if (item.digitalCompetency !== undefined && item.digitalCompetency !== null) {
    return item.digitalCompetency;
  }

  const lessonCtx = {
    lessonName: item.lessonName,
    subject: config.subject,
    grade: config.grade,
    lessonIndex: index,
    topic: item.topic || '',
    yccd: item.yccd || ''
  };

  const isHdtn =
    config.subject.toLowerCase().includes('trải nghiệm') ||
    config.subject.toLowerCase().includes('hđtn') ||
    config.subject.toLowerCase().includes('hdtn') ||
    config.subject.toLowerCase().includes('hướng nghiệp');

  const isHdtn89 =
    isHdtn &&
    (topicUpper.includes('CHỦ ĐỀ 8') ||
      topicUpper.includes('CHỦ ĐỀ 9') ||
      topicUpper.includes('KHÁM PHÁ THẾ GIỚI NGHỀ NGHIỆP') ||
      topicUpper.includes('HIỂU BẢN THÂN'));

  const nls = getNlsCodeForSubjectLesson(config.grade, config.schoolType, lessonCtx);
  const ai = (!isHdtn || isHdtn89)
    ? getAiCodeForSubjectLesson(config.grade, lessonCtx)
    : { code: '', requirement: '' };

  if (isEn) {
    return [
      nls.code ? `• [NLS Code: ${nls.code}] ${nls.requirement}` : '',
      ai.code ? `• [AI Code: ${ai.code}] ${ai.requirement}` : ''
    ].filter(Boolean).join('\n');
  }

  return [
    nls.code ? `• [Mã NLS: ${nls.code}] ${nls.requirement}` : '',
    ai.code ? `• [Mã AI: ${ai.code}] ${ai.requirement}` : ''
  ].filter(Boolean).join('\n');
}

export async function exportAppendix1Docx(plan: PlanData): Promise<void> {
  const { config, appendix1 } = plan;
  const isEn = isEnglishSubject(config.subject);

  const totalTeachers =
    (Number(config.teachersCollege) || 0) +
    (Number(config.teachersUniversity) || 0) +
    (Number(config.teachersMasterDoc) || 0);

  // Table Curriculum - 5 columns kèm Cột Tích hợp NLS và AI chuẩn YCCĐ
  const curriculumRows = [
    new TableRow({
      tableHeader: true,
      children: [
        new TableCell({
          width: { size: 5, type: WidthType.PERCENTAGE },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [new TextRun({ text: 'STT', bold: true, font: FONT_FAMILY, size: 20 })]
            })
          ]
        }),
        new TableCell({
          width: { size: 24, type: WidthType.PERCENTAGE },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ text: 'Bài học', bold: true, font: FONT_FAMILY, size: 20 }),
                new TextRun({ text: '\n(1)', font: FONT_FAMILY, size: 18 })
              ]
            })
          ]
        }),
        new TableCell({
          width: { size: 8, type: WidthType.PERCENTAGE },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ text: 'Số tiết', bold: true, font: FONT_FAMILY, size: 20 }),
                new TextRun({ text: '\n(2)', font: FONT_FAMILY, size: 18 })
              ]
            })
          ]
        }),
        new TableCell({
          width: { size: 36, type: WidthType.PERCENTAGE },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ text: 'Yêu cầu cần đạt', bold: true, font: FONT_FAMILY, size: 20 }),
                new TextRun({ text: '\n(3)', font: FONT_FAMILY, size: 18 })
              ]
            })
          ]
        }),
        new TableCell({
          width: { size: 27, type: WidthType.PERCENTAGE },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ text: 'Tích hợp NLS & AI', bold: true, font: FONT_FAMILY, size: 20 }),
                new TextRun({ text: '\n(CV 3456 & QĐ 2422)', font: FONT_FAMILY, size: 18 })
              ]
            })
          ]
        })
      ]
    }),
    ...appendix1.curriculum.map((c, idx) => {
      const compText = resolveDigitalCompForDocx(c, idx, config, isEn);

      return new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: c.stt.toString(), font: FONT_FAMILY, size: 20 })]
              })
            ]
          }),
          new TableCell({
            children: [
              ...(c.topic && c.topic.trim().length > 0
                ? [
                    new Paragraph({
                      children: [new TextRun({ text: c.topic, bold: true, font: FONT_FAMILY, size: 19 })]
                    })
                  ]
                : []),
              new Paragraph({
                children: [new TextRun({ text: c.lessonName, font: FONT_FAMILY, size: 20 })]
              })
            ]
          }),
          new TableCell({
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: formatDocxPeriod(c.periods, isEn), font: FONT_FAMILY, size: 20 })]
              })
            ]
          }),
          new TableCell({
            children: (() => {
              const raw = c.yccd || (isEn ? 'Master target language knowledge and communication skills according to CT GDPT 2018.' : 'Đạt chuẩn yêu cầu kiến thức kỹ năng theo CT GDPT 2018.');
              const lines = raw.includes('\n')
                ? raw.split('\n').filter((l) => l.trim().length > 0)
                : raw.split(';').map((s) => s.trim()).filter(Boolean);

              return lines.map((line) => new Paragraph({
                spacing: { before: 15, after: 15 },
                children: [
                  new TextRun({
                    text: line.startsWith('-') || line.startsWith('–') || line.startsWith('•') ? line : `- ${line}`,
                    font: FONT_FAMILY,
                    size: 19
                  })
                ]
              }));
            })()
          }),
          new TableCell({
            children: (() => {
              const lines = compText.split('\n').filter((l) => l.trim().length > 0);
              return lines.map((line) => new Paragraph({
                spacing: { before: 15, after: 15 },
                children: [
                  new TextRun({
                    text: line.startsWith('•') || line.startsWith('-') ? line : `• ${line}`,
                    font: FONT_FAMILY,
                    size: 18,
                    color: '047857'
                  })
                ]
              }));
            })()
          })
        ]
      });
    })
  ];

  // Table Selective Topics (Chuyên đề lựa chọn)
  const selectiveTopics =
    appendix1.selectiveTopics && appendix1.selectiveTopics.length > 0
      ? appendix1.selectiveTopics
      : getSelectiveTopicsBySubjectAndGrade(config.subject, config.grade, config.schoolType, config);

  const selectiveTopicRows = [
    new TableRow({
      tableHeader: true,
      children: [
        new TableCell({
          width: { size: 5, type: WidthType.PERCENTAGE },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [new TextRun({ text: isEn ? 'No.' : 'STT', bold: true, font: FONT_FAMILY, size: 20 })]
            })
          ]
        }),
        new TableCell({
          width: { size: 24, type: WidthType.PERCENTAGE },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ text: isEn ? 'Topic' : 'Chuyên đề', bold: true, font: FONT_FAMILY, size: 20 }),
                new TextRun({ text: '\n(1)', font: FONT_FAMILY, size: 18 })
              ]
            })
          ]
        }),
        new TableCell({
          width: { size: 8, type: WidthType.PERCENTAGE },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ text: isEn ? 'Periods' : 'Số tiết', bold: true, font: FONT_FAMILY, size: 20 }),
                new TextRun({ text: '\n(2)', font: FONT_FAMILY, size: 18 })
              ]
            })
          ]
        }),
        new TableCell({
          width: { size: 36, type: WidthType.PERCENTAGE },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ text: isEn ? 'Learning Objectives' : 'Yêu cầu cần đạt', bold: true, font: FONT_FAMILY, size: 20 }),
                new TextRun({ text: '\n(3)', font: FONT_FAMILY, size: 18 })
              ]
            })
          ]
        }),
        new TableCell({
          width: { size: 27, type: WidthType.PERCENTAGE },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ text: isEn ? 'Digital Competency & AI' : 'Tích hợp NLS & AI', bold: true, font: FONT_FAMILY, size: 20 })
              ]
            })
          ]
        })
      ]
    }),
    ...selectiveTopics.map((top, sIdx) => {
      const compText =
        top.digitalCompetency ||
        `• [Mã NLS: 5.3.TC2a] Vận dụng công nghệ số tạo ra sản phẩm sáng tạo\n• [Mã AI: 8.C1.2] Khai thác trợ lý AI hỗ trợ học tập và nghiên cứu`;
      const yccdLines = (top.yccd || 'Đạt chuẩn yêu cầu kiến thức kỹ năng theo CT GDPT 2018.').split('\n').filter((l) => l.trim().length > 0);
      const compLines = compText.split('\n').filter((l) => l.trim().length > 0);

      return new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: (top.stt || sIdx + 1).toString(), font: FONT_FAMILY, size: 20 })]
              })
            ]
          }),
          new TableCell({
            children: [
              new Paragraph({
                children: [new TextRun({ text: top.topicName, bold: true, font: FONT_FAMILY, size: 20 })]
              })
            ]
          }),
          new TableCell({
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: top.periods.toString(), font: FONT_FAMILY, size: 20 })]
              })
            ]
          }),
          new TableCell({
            children: yccdLines.map(
              (line) =>
                new Paragraph({
                  spacing: { before: 15, after: 15 },
                  children: [
                    new TextRun({
                      text: line.startsWith('-') || line.startsWith('•') ? line : `- ${line}`,
                      font: FONT_FAMILY,
                      size: 19
                    })
                  ]
                })
            )
          }),
          new TableCell({
            children: compLines.map(
              (line) =>
                new Paragraph({
                  spacing: { before: 15, after: 15 },
                  children: [
                    new TextRun({
                      text: line.startsWith('•') || line.startsWith('-') ? line : `• ${line}`,
                      font: FONT_FAMILY,
                      size: 18,
                      color: '047857'
                    })
                  ]
                })
            )
          })
        ]
      });
    })
  ];

  // Table Equipments (Mục I.3)
  const equipments = appendix1.equipments || [];
  const equipmentTableRows = [
    new TableRow({
      tableHeader: true,
      children: [
        new TableCell({ width: { size: 6, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'STT', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
        new TableCell({ width: { size: 30, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Thiết bị dạy học', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
        new TableCell({ width: { size: 14, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Số lượng', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
        new TableCell({ width: { size: 36, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Các bài thí nghiệm/thực hành', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
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

  // Table Classrooms (Mục I.4)
  const classrooms = appendix1.classrooms || [];
  const classroomTableRows = [
    new TableRow({
      tableHeader: true,
      children: [
        new TableCell({ width: { size: 6, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'STT', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
        new TableCell({ width: { size: 30, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Tên phòng', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
        new TableCell({ width: { size: 14, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Số lượng', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
        new TableCell({ width: { size: 36, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Phạm vi và nội dung sử dụng', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
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

  // Table Assessments (Mục II.3)
  const assessments = appendix1.assessments || [];
  const assessmentTableRows = [
    new TableRow({
      tableHeader: true,
      children: [
        new TableCell({
          width: { size: 26, type: WidthType.PERCENTAGE },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [new TextRun({ text: 'Bài kiểm tra, đánh giá', bold: true, font: FONT_FAMILY, size: 20 })]
            })
          ]
        }),
        new TableCell({
          width: { size: 12, type: WidthType.PERCENTAGE },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ text: 'Thời gian', bold: true, font: FONT_FAMILY, size: 20 }),
                new TextRun({ text: '\n(1)', font: FONT_FAMILY, size: 18 })
              ]
            })
          ]
        }),
        new TableCell({
          width: { size: 14, type: WidthType.PERCENTAGE },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ text: 'Thời điểm', bold: true, font: FONT_FAMILY, size: 20 }),
                new TextRun({ text: '\n(2)', font: FONT_FAMILY, size: 18 })
              ]
            })
          ]
        }),
        new TableCell({
          width: { size: 30, type: WidthType.PERCENTAGE },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ text: 'Yêu cầu cần đạt', bold: true, font: FONT_FAMILY, size: 20 }),
                new TextRun({ text: '\n(3)', font: FONT_FAMILY, size: 18 })
              ]
            })
          ]
        }),
        new TableCell({
          width: { size: 18, type: WidthType.PERCENTAGE },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ text: 'Hình thức', bold: true, font: FONT_FAMILY, size: 20 }),
                new TextRun({ text: '\n(4)', font: FONT_FAMILY, size: 18 })
              ]
            })
          ]
        })
      ]
    }),
    ...assessments.map((as) => {
      let name = as.assessmentName;
      let time = as.time;
      let week = as.week;
      let req = as.requirements;
      let form = as.form;

      if (name.toLowerCase().includes('mid-term test 1') || name.toLowerCase().includes('mid-term 1')) {
        name = `Kiểm tra, đánh giá giữa Học kỳ 1 (Tiếng Anh ${config.grade})`;
      } else if (name.toLowerCase().includes('end-of-term 1') || name.toLowerCase().includes('end-term 1') || name.toLowerCase().includes('semester 1')) {
        name = `Kiểm tra, đánh giá cuối Học kỳ 1 (Tiếng Anh ${config.grade})`;
      } else if (name.toLowerCase().includes('mid-term test 2') || name.toLowerCase().includes('mid-term 2')) {
        name = `Kiểm tra, đánh giá giữa Học kỳ 2 (Tiếng Anh ${config.grade})`;
      } else if (name.toLowerCase().includes('end-of-year') || name.toLowerCase().includes('final exam') || name.toLowerCase().includes('semester 2')) {
        name = `Kiểm tra, đánh giá cuối Học kỳ 2 & Cả năm (Tiếng Anh ${config.grade})`;
      }

      if (time.toLowerCase().includes('minutes')) {
        time = time.replace(/minutes/gi, 'phút').replace(/minute/gi, 'phút');
      }

      if (String(week).toLowerCase().includes('week')) {
        week = String(week).replace(/week\s*/gi, 'Tuần ');
      }

      if (req.toLowerCase().includes('assess 4 communicative skills') || req.toLowerCase().includes('cefr')) {
        req = 'Đánh giá 4 kỹ năng giao tiếp (Nghe, Nói, Đọc, Viết) và kiến thức ngôn ngữ theo ma trận đề chuẩn của Bộ GD&ĐT.';
      } else if (req.toLowerCase().includes('evaluate term 1')) {
        req = 'Đánh giá tổng kết kết quả học tập và năng lực giao tiếp Tiếng Anh của học sinh trong toàn bộ Học kỳ 1.';
      } else if (req.toLowerCase().includes('evaluate language retention') || req.toLowerCase().includes('term 2')) {
        req = 'Đánh giá sự tiến bộ về kỹ năng ngôn ngữ, độ trôi chảy và khả năng vận dụng kiến thức Tiếng Anh trong nửa đầu Học kỳ 2.';
      } else if (req.toLowerCase().includes('comprehensive assessment') || req.toLowerCase().includes('year-end')) {
        req = 'Đánh giá toàn diện năng lực tiếng Anh cả năm học, làm căn cứ xét hoàn thành chương trình môn học và lên lớp.';
      }

      if (form.toLowerCase().includes('written test') && form.toLowerCase().includes('speaking test')) {
        form = 'Kiểm tra viết trên giấy/máy tính (Nghe, Đọc, Viết) kết hợp Kiểm tra Nói (Tỉ lệ 70% viết - 30% nói)';
      } else if (form.toLowerCase().includes('standardized semester')) {
        form = 'Đề kiểm tra chuẩn hóa cuối kỳ cấp trường (Đánh giá đủ 4 kỹ năng: Nghe, Nói, Đọc, Viết)';
      } else if (form.toLowerCase().includes('project presentation') || form.toLowerCase().includes('speaking interaction')) {
        form = 'Kiểm tra viết kết hợp Báo cáo dự án / Vấn đáp giao tiếp tiếng Anh';
      } else if (form.toLowerCase().includes('standardized school-wide') || form.toLowerCase().includes('final examination')) {
        form = 'Đề kiểm tra chuẩn hóa cả năm cấp trường (Đánh giá 4 kỹ năng kết hợp Ngữ pháp & Từ vựng)';
      }

      return new TableRow({
        children: [
          new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: name, bold: true, font: FONT_FAMILY, size: 20 })] })] }),
          new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: time, font: FONT_FAMILY, size: 20 })] })] }),
          new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: String(week), font: FONT_FAMILY, size: 20 })] })] }),
          new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: req, font: FONT_FAMILY, size: 19 })] })] }),
          new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: form, font: FONT_FAMILY, size: 19 })] })] })
        ]
      });
    })
  ];

  const doc = new Document({
    sections: [
      {
        children: [
          createTitle('Phụ lục I', 22, true),
          createTitle('KHUNG KẾ HOẠCH DẠY HỌC MÔN HỌC CỦA TỔ CHUYÊN MÔN', 24, true),
          createTitle('(Kèm theo Công văn số 5512/BGDĐT-GDTrH ngày 18 tháng 12 năm 2020 của Bộ GDĐT)', 20, false),

          createHeaderSection(config),
          new Paragraph({ spacing: { before: 120 } }),

          createTitle('KẾ HOẠCH DẠY HỌC CỦA TỔ CHUYÊN MÔN', 24, true),
          createTitle(`MÔN HỌC/HOẠT ĐỘNG GIÁO DỤC ${config.subject.toUpperCase()}, KHỐI LỚP ${config.grade}`, 22, true),
          createTitle(`(Năm học ${config.academicYear})`, 20, false),

          createHeading('I. Đặc điểm tình hình'),
          createBodyParagraph(`1. Số lớp: ${config.totalClasses}; Số học sinh: ${config.totalStudents}; Số học sinh học chuyên đề lựa chọn (nếu có): ......`),
          createBodyParagraph(`2. Tình hình đội ngũ: Số giáo viên: ${totalTeachers}; Trình độ đào tạo: Cao đẳng: ${config.teachersCollege}; Đại học: ${config.teachersUniversity}; Trên đại học: ${config.teachersMasterDoc}`),
          createBodyParagraph(`Mức đạt chuẩn nghề nghiệp giáo viên: Tốt: ${config.evalExcellent}; Khá: ${config.evalGood}; Đạt: ${config.evalPass}; Chưa đạt: ${config.evalFail || 0}`),
          createBodyParagraph('3. Thiết bị dạy học: (Trình bày cụ thể các thiết bị dạy học có thể sử dụng để tổ chức dạy học môn học/hoạt động giáo dục)'),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: equipmentTableRows
          }),

          new Paragraph({ spacing: { before: 80 } }),
          createBodyParagraph('4. Phòng học bộ môn/phòng thí nghiệm/phòng đa năng/sân chơi, bãi tập (Trình bày cụ thể các phòng thí nghiệm/phòng bộ môn/phòng đa năng/sân chơi/bãi tập có thể sử dụng để tổ chức dạy học môn học/hoạt động giáo dục)'),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: classroomTableRows
          }),

          createHeading('II. Kế hoạch dạy học'),
          createHeading('1. Phân phối chương trình', HeadingLevel.HEADING_3),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: curriculumRows
          }),

          new Paragraph({ spacing: { before: 80 } }),
          createHeading('2. Chuyên đề lựa chọn (đối với cấp trung học phổ thông)', HeadingLevel.HEADING_3),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: selectiveTopicRows
          }),

          createFootnoteParagraph('(1) Tên bài học/chuyên đề được xây dựng từ nội dung/chủ đề (được lấy nguyên hoặc thiết kế lại phù hợp với điều kiện thực tế của nhà trường) theo chương trình, sách giáo khoa môn học/hoạt động giáo dục.'),
          createFootnoteParagraph('(2) Số tiết được sử dụng để thực hiện bài dạy/chuyên đề.'),
          createFootnoteParagraph('(3) Yêu cầu (mức độ) cần đạt theo chương trình môn học: Giáo viên chủ động các đơn vị bài học, chủ đề và xác định yêu cầu (mức độ) cần đạt.'),

          new Paragraph({ spacing: { before: 80 } }),
          createHeading('3. Kiểm tra, đánh giá định kỳ', HeadingLevel.HEADING_3),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: assessmentTableRows
          }),

          createFootnoteParagraph('(1) Thời gian làm bài kiểm tra, đánh giá.'),
          createFootnoteParagraph('(2) Tuần thứ, tháng, năm thực hiện bài kiểm tra, đánh giá.'),
          createFootnoteParagraph('(3) Yêu cầu (mức độ) cần đạt đến thời điểm kiểm tra, đánh giá (theo phân phối chương trình).'),
          createFootnoteParagraph('(4) Hình thức bài kiểm tra, đánh giá: viết (trên giấy hoặc trên máy tính); bài thực hành; dự án học tập.'),

          createHeading('III. Các nội dung khác (nếu có):'),
          createBodyParagraph(`- Bồi dưỡng học sinh giỏi: ${appendix1.otherTasks?.advancedTraining || ''}`),
          createBodyParagraph(`- Phụ đạo học sinh: ${appendix1.otherTasks?.remedialTeaching || ''}`),
          createBodyParagraph(`- Sinh hoạt chuyên môn theo NCBH: ${appendix1.otherTasks?.lessonStudyGroup || ''}`),
          createBodyParagraph(`- Hoạt động giáo dục khác: ${appendix1.otherTasks?.otherActivities || ''}`),

          new Paragraph({ spacing: { before: 200 } }),
          createAppendix1SignatureSection(config)
        ]
      }
    ]
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, `Phu-luc-1-Lop-${config.grade}-${config.subject}.docx`);
}

export async function exportAppendix2Docx(plan: PlanData): Promise<void> {
  const { config, appendix2 } = plan;
  const isEn = isEnglishSubject(config.subject);

  const doc = new Document({
    sections: [
      {
        children: [
          createTitle('PHỤ LỤC II', 22, true),
          createTitle('KHUNG KẾ HOẠCH TỔ CHỨC CÁC HOẠT ĐỘNG GIÁO DỤC CỦA TỔ CHUYÊN MÔN', 24, true),
          createTitle('(Kèm theo Công văn số 5512/BGDĐT-GDTrH ngày 18 tháng 12 năm 2020 của Bộ GDĐT)', 20, false),

          createHeaderSection(config),
          new Paragraph({ spacing: { before: 120 } }),

          createTitle(`KẾ HOẠCH TỔ CHỨC CÁC HOẠT ĐỘNG GIÁO DỤC CỦA TỔ CHUYÊN MÔN`, 24, true),
          createTitle(`MÔN: ${config.subject.toUpperCase()} - KHỐI ${config.grade}`, 22, true),
          createTitle(`(Năm học ${config.academicYear})`, 20, false),

          createHeading(isEn ? 'I. CÁC HOẠT ĐỘNG GIÁO DỤC / TRẢI NGHIỆM SỐ & AI' : 'I. CÁC HOẠT ĐỘNG GIÁO DỤC / TRẢI NGHIỆM SỐ & AI'),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              new TableRow({
                tableHeader: true,
                children: [
                  new TableCell({ width: { size: 6, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'STT', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ width: { size: 28, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: isEn ? 'Chủ đề / Hoạt động' : 'Chủ đề / Hoạt động', bold: true, font: FONT_FAMILY, size: 20 })] })] }),
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
                  new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: `${a.periods} ${isEn ? (a.periods > 1 ? 'periods' : 'period') : 'tiết'}`, font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: a.timeline, font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: `${a.location} - ${isEn ? 'Host: ' : 'Chủ trì: '}${a.host}`, font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: `${a.requirements} (${isEn ? 'Facilities: ' : 'CSVC: '}${a.conditions})`, font: FONT_FAMILY, size: 20 })] })] })
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
                  new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: `${s.periods} ${isEn ? (s.periods > 1 ? 'periods' : 'period') : 'tiết'}`, font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: `${s.timeline} (${s.location})`, font: FONT_FAMILY, size: 20 })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: `${s.requirements} - ${isEn ? 'Materials: ' : 'Vật liệu: '}${s.conditions}`, font: FONT_FAMILY, size: 20 })] })] })
                ]
              }))
            ]
          }),

          new Paragraph({ spacing: { before: 200 } }),
          createAppendix1SignatureSection(config)
        ]
      }
    ]
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, `Phu-luc-2-Hoat-dong-STEM-Lop-${config.grade}-${config.subject}.docx`);
}

export async function exportAppendix3Docx(plan: PlanData): Promise<void> {
  const { config, appendix1, appendix3 } = plan;
  const isEn = isEnglishSubject(config.subject);

  const teachingItems =
    appendix3.teachingPlan && appendix3.teachingPlan.length > 0
      ? appendix3.teachingPlan
      : appendix1.curriculum.map((c, index) => ({
          id: `tp-${c.id || index + 1}`,
          stt: index + 1,
          lessonName: c.lessonName,
          periods: c.periods,
          timeline: typeof c.week === 'number' ? (isEn ? `Week ${c.week}` : `Tuần ${c.week}`) : (isEn ? String(c.week).replace(/tuần\s*/i, 'Week ') : c.week),
          equipment: c.equipment || (isEn ? 'Audio CD/MP3 Global Success, Smart TV/Projector, Flashcards, LMS' : 'Máy tính, máy chiếu/Tivi thông minh, SGK, phần mềm dạy học'),
          location: c.location || (isEn ? 'Phòng học Tiếng Anh / Lớp học' : (config.schoolType === 'primary' ? 'Phòng học Tiếng Anh/Tin học' : 'Phòng học bộ môn')),
          digitalCompetency: c.digitalCompetency || '',
          nlsCode: c.nlsCode || '',
          aiCode: c.aiCode || '',
          notes: c.notes || ''
        }));

  const selectiveTopics =
    appendix3.selectiveTopics && appendix3.selectiveTopics.length > 0
      ? appendix3.selectiveTopics
      : appendix1.selectiveTopics && appendix1.selectiveTopics.length > 0
      ? appendix1.selectiveTopics
      : getSelectiveTopicsBySubjectAndGrade(config.subject, config.grade, config.schoolType, config);

  const otherDuties = appendix3.otherDuties || {
    advancedTraining: appendix1.otherTasks.advancedTraining,
    remedialTeaching: appendix1.otherTasks.remedialTeaching,
    scienceResearch: 'Hướng dẫn học sinh nghiên cứu khoa học kỹ thuật, sáng tạo sản phẩm STEM và ứng dụng công nghệ số / AI cấp trường.',
    extracurricularAndDuties: appendix1.otherTasks.otherActivities
  };

  const teachingTableRows = [
    new TableRow({
      tableHeader: true,
      children: [
        new TableCell({
          width: { size: 5, type: WidthType.PERCENTAGE },
          children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'STT', bold: true, font: FONT_FAMILY, size: 20 })] })]
        }),
        new TableCell({
          width: { size: 25, type: WidthType.PERCENTAGE },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ text: 'Bài học', bold: true, font: FONT_FAMILY, size: 20 }),
                new TextRun({ text: '\n(1)', font: FONT_FAMILY, size: 18 })
              ]
            })
          ]
        }),
        new TableCell({
          width: { size: 6, type: WidthType.PERCENTAGE },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ text: 'Số tiết', bold: true, font: FONT_FAMILY, size: 20 }),
                new TextRun({ text: '\n(2)', font: FONT_FAMILY, size: 18 })
              ]
            })
          ]
        }),
        new TableCell({
          width: { size: 8, type: WidthType.PERCENTAGE },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ text: 'Thời điểm', bold: true, font: FONT_FAMILY, size: 20 }),
                new TextRun({ text: '\n(3)', font: FONT_FAMILY, size: 18 })
              ]
            })
          ]
        }),
        new TableCell({
          width: { size: 16, type: WidthType.PERCENTAGE },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ text: 'Thiết bị dạy học', bold: true, font: FONT_FAMILY, size: 20 }),
                new TextRun({ text: '\n(4)', font: FONT_FAMILY, size: 18 })
              ]
            })
          ]
        }),
        new TableCell({
          width: { size: 15, type: WidthType.PERCENTAGE },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ text: 'Địa điểm dạy học', bold: true, font: FONT_FAMILY, size: 20 }),
                new TextRun({ text: '\n(5)', font: FONT_FAMILY, size: 18 })
              ]
            })
          ]
        }),
        new TableCell({
          width: { size: 25, type: WidthType.PERCENTAGE },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ text: 'Tích hợp NLS & AI', bold: true, font: FONT_FAMILY, size: 20 }),
                new TextRun({ text: '\n(6)', font: FONT_FAMILY, size: 18 })
              ]
            })
          ]
        })
      ]
    }),
    ...teachingItems.map((item, idx) => {
      const compText = resolveDigitalCompForDocx(item, idx, config, isEn);

      return new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: (item.stt || idx + 1).toString(), font: FONT_FAMILY, size: 20 })]
              })
            ]
          }),
          new TableCell({
            children: [
              new Paragraph({
                children: [new TextRun({ text: item.lessonName, font: FONT_FAMILY, size: 20 })]
              })
            ]
          }),
          new TableCell({
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: formatDocxPeriod(item.periods, isEn), font: FONT_FAMILY, size: 20 })]
              })
            ]
          }),
          new TableCell({
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: item.timeline || `Tuần ${idx + 1}`, font: FONT_FAMILY, size: 20 })]
              })
            ]
          }),
          new TableCell({
            children: [
              new Paragraph({
                children: [new TextRun({ text: item.equipment || (isEn ? 'Audio CD/MP3, Projector, LMS' : 'Máy tính, máy chiếu/Tivi thông minh, SGK'), font: FONT_FAMILY, size: 18 })]
              })
            ]
          }),
          new TableCell({
            children: [
              new Paragraph({
                children: [new TextRun({ text: item.location || (isEn ? 'Phòng học Tiếng Anh / Lớp học' : (config.schoolType === 'primary' ? 'Phòng học Tiếng Anh/Tin học' : 'Phòng học bộ môn')), font: FONT_FAMILY, size: 19 })]
              })
            ]
          }),
          new TableCell({
            children: (() => {
              const lines = compText.split('\n').filter((l) => l.trim().length > 0);
              return lines.map((line) => new Paragraph({
                spacing: { before: 15, after: 15 },
                children: [
                  new TextRun({
                    text: line.startsWith('•') || line.startsWith('-') ? line : `• ${line}`,
                    font: FONT_FAMILY,
                    size: 18,
                    color: '047857'
                  })
                ]
              }));
            })()
          })
        ]
      });
    })
  ];

  const selectiveTopicsTableRows = [
    new TableRow({
      tableHeader: true,
      children: [
        new TableCell({
          width: { size: 5, type: WidthType.PERCENTAGE },
          children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: isEn ? 'No.' : 'STT', bold: true, font: FONT_FAMILY, size: 20 })] })]
        }),
        new TableCell({
          width: { size: 25, type: WidthType.PERCENTAGE },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ text: isEn ? 'Topic' : 'Chuyên đề', bold: true, font: FONT_FAMILY, size: 20 }),
                new TextRun({ text: '\n(1)', font: FONT_FAMILY, size: 18 })
              ]
            })
          ]
        }),
        new TableCell({
          width: { size: 6, type: WidthType.PERCENTAGE },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ text: isEn ? 'Periods' : 'Số tiết', bold: true, font: FONT_FAMILY, size: 20 }),
                new TextRun({ text: '\n(2)', font: FONT_FAMILY, size: 18 })
              ]
            })
          ]
        }),
        new TableCell({
          width: { size: 8, type: WidthType.PERCENTAGE },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ text: isEn ? 'Timeline' : 'Thời điểm', bold: true, font: FONT_FAMILY, size: 20 }),
                new TextRun({ text: '\n(3)', font: FONT_FAMILY, size: 18 })
              ]
            })
          ]
        }),
        new TableCell({
          width: { size: 16, type: WidthType.PERCENTAGE },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ text: isEn ? 'Teaching Equipment' : 'Thiết bị dạy học', bold: true, font: FONT_FAMILY, size: 20 }),
                new TextRun({ text: '\n(4)', font: FONT_FAMILY, size: 18 })
              ]
            })
          ]
        }),
        new TableCell({
          width: { size: 15, type: WidthType.PERCENTAGE },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ text: isEn ? 'Teaching Location' : 'Địa điểm dạy học', bold: true, font: FONT_FAMILY, size: 20 }),
                new TextRun({ text: '\n(5)', font: FONT_FAMILY, size: 18 })
              ]
            })
          ]
        }),
        new TableCell({
          width: { size: 25, type: WidthType.PERCENTAGE },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ text: isEn ? 'Digital Competency & AI' : 'Tích hợp NLS & AI', bold: true, font: FONT_FAMILY, size: 20 }),
                new TextRun({ text: '\n(6)', font: FONT_FAMILY, size: 18 })
              ]
            })
          ]
        })
      ]
    }),
    ...selectiveTopics.map((top, sIdx) => {
      const compText =
        top.digitalCompetency ||
        `• [Mã NLS: 5.3.TC2a] Vận dụng công nghệ số tạo ra sản phẩm sáng tạo\n• [Mã AI: 8.C1.2] Khai thác trợ lý AI hỗ trợ học tập và nghiên cứu`;
      const compLines = compText.split('\n').filter((l) => l.trim().length > 0);

      return new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: (top.stt || sIdx + 1).toString(), font: FONT_FAMILY, size: 20 })]
              })
            ]
          }),
          new TableCell({
            children: [
              new Paragraph({
                children: [new TextRun({ text: top.topicName, bold: true, font: FONT_FAMILY, size: 20 })]
              })
            ]
          }),
          new TableCell({
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: top.periods.toString(), font: FONT_FAMILY, size: 20 })]
              })
            ]
          }),
          new TableCell({
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: top.timeline || `Tuần ${sIdx * 10 + 1} - Tuần ${(sIdx + 1) * 10}`, font: FONT_FAMILY, size: 20 })]
              })
            ]
          }),
          new TableCell({
            children: [
              new Paragraph({
                children: [new TextRun({ text: top.equipment || 'Máy tính, máy chiếu, tài liệu học liệu số', font: FONT_FAMILY, size: 18 })]
              })
            ]
          }),
          new TableCell({
            children: [
              new Paragraph({
                children: [new TextRun({ text: top.location || 'Phòng học bộ môn / Phòng STEM', font: FONT_FAMILY, size: 19 })]
              })
            ]
          }),
          new TableCell({
            children: compLines.map(
              (line) =>
                new Paragraph({
                  spacing: { before: 15, after: 15 },
                  children: [
                    new TextRun({
                      text: line.startsWith('•') || line.startsWith('-') ? line : `• ${line}`,
                      font: FONT_FAMILY,
                      size: 18,
                      color: '047857'
                    })
                  ]
                })
            )
          })
        ]
      });
    })
  ];

  const doc = new Document({
    sections: [
      {
        children: [
          createTitle('Phụ lục III', 22, true),
          createTitle('KHUNG KẾ HOẠCH GIÁO DỤC CỦA GIÁO VIÊN', 24, true),
          createTitle('(Kèm theo Công văn số 5512/BGDĐT-GDTrH ngày 18 tháng 12 năm 2020 của Bộ GDĐT)', 20, false),

          createHeaderSectionWithTeacher(config),
          new Paragraph({ spacing: { before: 120 } }),

          createTitle('KẾ HOẠCH GIÁO DỤC CỦA GIÁO VIÊN', 24, true),
          createTitle(`MÔN HỌC/HOẠT ĐỘNG GIÁO DỤC: ${config.subject.toUpperCase()}, LỚP: ${config.grade}`, 22, true),
          createTitle(`(Năm học ${config.academicYear})`, 20, false),

          createHeading('I. Kế hoạch dạy học'),
          createHeading('1. Phân phối chương trình', HeadingLevel.HEADING_3),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: teachingTableRows
          }),

          new Paragraph({ spacing: { before: 80 } }),
          createHeading('2. Chuyên đề lựa chọn (đối với cấp trung học phổ thông)', HeadingLevel.HEADING_3),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: selectiveTopicsTableRows
          }),

          createFootnoteParagraph('(1) Tên bài học/chuyên đề được xây dựng từ nội dung/chủ đề (được lấy nguyên hoặc thiết kế lại phù hợp với điều kiện thực tế của nhà trường) theo chương trình, sách giáo khoa môn học/hoạt động giáo dục.'),
          createFootnoteParagraph('(2) Số tiết được sử dụng để thực hiện bài dạy/chuyên đề.'),
          createFootnoteParagraph('(3) Tuần thực hiện bài học/chuyên đề.'),
          createFootnoteParagraph('(4) Thiết bị dạy học được sử dụng để tổ chức dạy học.'),
          createFootnoteParagraph('(5) Địa điểm tổ chức hoạt động dạy học (lớp học, phòng học bộ môn, phòng đa năng, bãi tập, tại di sản, thực địa...).'),

          createHeading('II. Nhiệm vụ khác (nếu có): (Bồi dưỡng học sinh giỏi; Tổ chức hoạt động giáo dục...)'),
          createBodyParagraph(`- Bồi dưỡng học sinh giỏi: ${otherDuties.advancedTraining}`),
          createBodyParagraph(`- Phụ đạo học sinh cần hỗ trợ: ${otherDuties.remedialTeaching}`),
          createBodyParagraph(`- Tổ chức hoạt động giáo dục / Hướng dẫn nghiên cứu KHKT, STEM & AI: ${otherDuties.scienceResearch}`),
          createBodyParagraph(`- Hoạt động trải nghiệm & nhiệm vụ kiêm nhiệm: ${otherDuties.extracurricularAndDuties}`),

          new Paragraph({ spacing: { before: 200 } }),
          createAppendix3SignatureSection(config)
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
          createAppendix1SignatureSection(config)
        ]
      }
    ]
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, `Phu-luc-Ke-hoach-ca-nhan-GV-${config.teacherName}-${config.subject}.docx`);
}

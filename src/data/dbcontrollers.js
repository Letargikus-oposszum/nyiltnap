import db from "../data/db.js"

export const getStudentsBySettlement = (settlementName) => 
    db.prepare("SELECT * FROM diakok WHERE telepules = ?").get(settlementName);

export const getLessonsByLanguage = (lang) => 
    db.prepare("SELECT * FROM orak WHERE targy = ?").get(lang);

import PDFDocument from 'pdfkit'
import { createWriteStream, mkdirSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outPath = join(__dirname, '../public/legal/CadenceY_Mutual_NDA.pdf')
mkdirSync(dirname(outPath), { recursive: true })

const doc = new PDFDocument({
  size: 'LETTER',
  margins: { top: 64, bottom: 64, left: 64, right: 64 },
  info: {
    Title: 'CadenceY Mutual Non-Disclosure Agreement',
    Author: 'CadenceY Tech',
    Subject: 'Mutual NDA',
  },
})

doc.pipe(createWriteStream(outPath))

const ink = '#111111'
const muted = '#444444'

function heading(text) {
  doc.moveDown(0.6)
  doc.font('Helvetica-Bold').fontSize(11).fillColor(ink).text(text)
  doc.moveDown(0.25)
}

function para(text) {
  doc.font('Helvetica').fontSize(10).fillColor(ink).text(text, { align: 'justify', lineGap: 2 })
  doc.moveDown(0.35)
}

function bullet(text) {
  doc.font('Helvetica').fontSize(10).fillColor(ink).text(`•  ${text}`, {
    align: 'left',
    lineGap: 2,
    indent: 8,
  })
  doc.moveDown(0.2)
}

doc.font('Helvetica-Bold').fontSize(16).fillColor(ink)
  .text('MUTUAL NON-DISCLOSURE AGREEMENT', { align: 'center' })
doc.moveDown(0.25)
doc.font('Helvetica').fontSize(10).fillColor(muted)
  .text('CadenceY Tech', { align: 'center' })
doc.text('Effective as of the date of the last signature below', { align: 'center' })
doc.moveDown(0.8)

para(
  'This Mutual Non-Disclosure Agreement (the “Agreement”) is entered into by and between CadenceY Tech (“CadenceY”), and the individual or entity identified in the signature block below (“Counterparty”). CadenceY and Counterparty may each be referred to as a “Party” and together as the “Parties.”',
)

heading('1. Purpose')
para(
  'The Parties wish to explore, evaluate, or pursue a potential business, employment, contractor, partnership, investment, or technical relationship relating to CadenceY’s products, platforms, and technology (including without limitation infinisoc, Pulse, Fast USDC-related flows, SDKs, smart contracts, and related infrastructure) (the “Purpose”). In connection with the Purpose, each Party may disclose Confidential Information to the other.',
)

heading('2. Definition of Confidential Information')
para(
  '“Confidential Information” means all non-public information, whether technical, commercial, financial, operational, or otherwise, disclosed by or on behalf of a Party (the “Disclosing Party”) to the other Party (the “Receiving Party”), in any form (oral, written, electronic, or otherwise), that is marked confidential or that a reasonable person would understand to be confidential given its nature or the circumstances of disclosure. Confidential Information includes, without limitation:',
)
bullet('source code, object code, APIs, SDKs, architectures, designs, schemas, and documentation;')
bullet('smart-contract logic, threat models, audit materials, keys, credentials, and security processes;')
bullet('product roadmaps, pricing, tokenomics drafts, go-to-market plans, and customer or partner lists;')
bullet('business plans, financials, fundraising materials, and internal analyses; and')
bullet('the existence and terms of discussions between the Parties, except as needed for ordinary professional advisors under confidentiality obligations.')
para(
  'Confidential Information does not include information that the Receiving Party can demonstrate: (a) is or becomes publicly available through no breach of this Agreement; (b) was lawfully known to the Receiving Party before disclosure without confidentiality duty; (c) is independently developed without use of the Disclosing Party’s Confidential Information; or (d) is rightfully received from a third party without confidentiality duty.',
)

heading('3. Obligations')
para('The Receiving Party shall:')
bullet('use Confidential Information solely for the Purpose;')
bullet('not disclose Confidential Information to any third party without the Disclosing Party’s prior written consent, except to employees, contractors, or professional advisors who have a need to know and are bound by confidentiality obligations no less protective than this Agreement;')
bullet('protect Confidential Information with at least the same degree of care it uses for its own confidential information of like importance, and in no event less than reasonable care;')
bullet('not reverse engineer, decompile, or attempt to derive source code or trade secrets from Confidential Information except to the extent such restriction is prohibited by applicable law; and')
bullet('promptly notify the Disclosing Party upon discovering any unauthorized use or disclosure.')

heading('4. Compelled Disclosure')
para(
  'If the Receiving Party is required by law, regulation, or court/governmental order to disclose Confidential Information, it shall (to the extent legally permitted) give prompt written notice to the Disclosing Party and reasonably cooperate, at the Disclosing Party’s expense, in seeking a protective order or other remedy. Any disclosure so compelled shall be limited to the minimum required.',
)

heading('5. No License; No Obligation')
para(
  'Nothing in this Agreement grants any license, assignment, or other right under any intellectual property or Confidential Information, except the limited right to use Confidential Information for the Purpose. Neither Party is obligated to proceed with any transaction, employment, or relationship. All Confidential Information remains the property of the Disclosing Party.',
)

heading('6. Term; Return or Destruction')
para(
  'This Agreement begins on the Effective Date and continues for three (3) years, unless terminated earlier by either Party upon thirty (30) days’ written notice. Confidentiality obligations survive for three (3) years after termination or disclosure (whichever is later), except that trade secrets shall be protected for so long as they remain trade secrets under applicable law.',
)
para(
  'Upon written request, or upon termination of discussions, the Receiving Party shall promptly return or securely destroy the Disclosing Party’s Confidential Information (including copies), and certify destruction upon request, except for copies retained solely for archival, legal, or regulatory compliance that remain subject to this Agreement.',
)

heading('7. No Warranty')
para(
  'Confidential Information is provided “AS IS.” The Disclosing Party makes no warranties, express or implied, regarding accuracy, completeness, or fitness for a particular purpose.',
)

heading('8. Remedies')
para(
  'The Parties acknowledge that unauthorized use or disclosure of Confidential Information may cause irreparable harm for which monetary damages may be inadequate. Accordingly, the Disclosing Party shall be entitled to seek injunctive or other equitable relief, without the necessity of proving actual damages or posting a bond (to the extent permitted by law), in addition to any other remedies available at law or equity.',
)

heading('9. Governing Law; Venue')
para(
  'This Agreement shall be governed by the laws of the State of Delaware, USA, without regard to conflict-of-law principles. The Parties consent to the exclusive jurisdiction of the state and federal courts located in Delaware for disputes arising out of this Agreement, except that either Party may seek interim injunctive relief in any court of competent jurisdiction.',
)

heading('10. General')
para(
  'This Agreement constitutes the entire agreement between the Parties concerning its subject matter and supersedes prior or contemporaneous NDAs on the same subject. It may be amended only in a writing signed by both Parties. If any provision is held unenforceable, the remainder shall continue in effect. Neither Party may assign this Agreement without the other’s prior written consent, except to a successor in connection with a merger, acquisition, or sale of substantially all assets. This Agreement may be executed in counterparts (including electronic signature), each of which is deemed an original.',
)

doc.moveDown(0.6)
heading('SIGNATURES')
para(
  'IN WITNESS WHEREOF, the Parties have executed this Agreement as of the Effective Date.',
)

doc.moveDown(0.5)
doc.font('Helvetica-Bold').fontSize(10).text('CadenceY Tech')
doc.font('Helvetica').fontSize(10)
doc.text('Signature: _______________________________')
doc.text('Name: ___________________________________')
doc.text('Title: ____________________________________')
doc.text('Email: careers@cadencey.io / legal@cadencey.io')
doc.text('Date: ____________________________________')

doc.moveDown(0.8)
doc.font('Helvetica-Bold').fontSize(10).text('Counterparty')
doc.font('Helvetica').fontSize(10)
doc.text('Full legal name: __________________________')
doc.text('Signature: _______________________________')
doc.text('Name: ___________________________________')
doc.text('Title (if entity): __________________________')
doc.text('Address: _________________________________')
doc.text('Email: ___________________________________')
doc.text('Date: ____________________________________')

doc.moveDown(1)
doc.font('Helvetica-Oblique').fontSize(8).fillColor(muted).text(
  'Template notice: This document is provided as a working template for CadenceY Tech. Have qualified counsel review and adapt it for your jurisdiction and use case before relying on it.',
  { align: 'left' },
)

doc.end()
console.log('Wrote', outPath)

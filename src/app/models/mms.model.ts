export class MMSContent {
  constructor(public type: string, public filename: string, public payload: string) {}
}
export class MMS {
  from: string;
  to: string[];
  subject: string;
  replyRequest: boolean;
  notifyURL: string;
  MMSContent: MMSContent[];

  constructor(from: string, to: string[], subject: string, replyRequest: boolean, notifyURL: string, MMSContent: MMSContent[]) {
    this.from = from;
    this.to = to;
    this.subject = subject;
    this.replyRequest = replyRequest;
    this.notifyURL = notifyURL;
    this.MMSContent = MMSContent;
  }
}
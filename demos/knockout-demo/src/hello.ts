import * as ko from 'knockout'

class HelloViewModel {
  language: KnockoutObservable<string>
  framework: KnockoutObservable<string>

  constructor(langiage: string, framework: string) {
    this.language = ko.observable(langiage)
    this.framework = ko.observable(framework)
  }
}

ko.applyBindings(new HelloViewModel('ts', 'knockout'))

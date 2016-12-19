class HeroController {
  // @ngInject
  constructor() {
    this.date = new Date();
    this.flag = false;
    this.events = [
      {
        date: new Date(),
        status: 'full'
      },
      {
        date: new Date(),
        status: 'partially'
      }
    ];
    this.options = {
      formatYear: 'yy',
      maxDate: new Date(2020, 5, 22),
      minDate: new Date(),
      startingDay: 1
    }
  }
}

export default HeroController;

// import { DomainEventClass } from '../../../../Shared/domain/DomainEvent';
// import { DomainEventSubscriber } from '../../../../Shared/domain/DomainEventSubscriber';
// import { CourseCreatedDomainEvent } from '../../../Courses/domain/CourseCreatedDomainEvent';
// import { CourseId } from '../../../Shared/domain/Courses/CourseId';
// import { CoursesCounterIncrementer } from './CoursesCounterIncrementer';

// export class IncrementCoursesCounterOnCourseCreated implements DomainEventSubscriber<CourseCreatedDomainEvent> {
//   constructor(private incrementer: CoursesCounterIncrementer) {}

//   function subscribedTo() {
//     return [CourseCreatedDomainEvent]; // aqui irian todos los que estamos suscritos
//   }

//   async on(domainEvent: CourseCreatedDomainEvent) {
//     await this.incrementer.run(new CourseId(domainEvent.aggregateId));
//   }
// }

// // incrementer en constructor
// module.exports = ({}) => {
  
//   function subscribedTo() {
//     return [CourseCreatedDomainEvent]; // aqui irian todos los que estamos suscritos
//   }

//   async function on(domainEvent) {
//     // await this.incrementer.run(new CourseId(domainEvent.aggregateId));
//     console.log('RECIVED!', domainEvent)
//   }

//   return {
//     subscribedTo,
//     on
//   }
// }

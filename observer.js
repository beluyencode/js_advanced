class Observer {
    constructor() {
        this.observers = [];
    }

    subscribe(subject) {
        this.observers.push(subject);
    }

    unsubscribe(subject) {
        this.observers = this.observers.filter(obs => obs !== subject);
    }

    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}
class Subject {
    constructor() {
        this.data = null;
        this.observer = new Observer();
    }

    setData(data) {
        this.data = data;
        this.observer.notify(data);
    }

    subscribe(observer) {
        this.observer.subscribe(observer);
    }

    unsubscribe(observer) {
        this.observer.unsubscribe(observer);
    }
}

// Tạo một đối tượng Observer
const observer1 = {
    update: function (data) {
        console.log('Observer 1 has been updated with data:', data);
    }
};

const observer2 = {
    update: function (data) {
        console.log('Observer 2 has been updated with data:', data);
    }
};

// Tạo một đối tượng Subject
const subject = new Subject();

// Đăng ký Observer
subject.subscribe(observer1);
subject.subscribe(observer2);

// Cập nhật dữ liệu trong Subject, Observer sẽ được thông báo
subject.setData('New Data');

// Huỷ đăng ký Observer
subject.unsubscribe(observer1);

// Cập nhật dữ liệu trong Subject một lần nữa
subject.setData('Another Data');

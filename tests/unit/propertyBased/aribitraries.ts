import * as fc from "fast-check";

// Simple integer generators with new API syntax
const zero2sixty = fc.integer({ min: 0, max: 59 });
const one2twentyThree = fc.integer({ min: 1, max: 23 });
const one2ThirtyOne = fc.integer({ min: 1, max: 31 });
const one2Twelve = fc.integer({ min: 1, max: 12 });
const one2safeInteger = fc.integer({ min: 1, max: Number.MAX_SAFE_INTEGER });

// Array of day constants  
const arrayOfDays = fc.array(
    fc.constantFrom("MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"),
    { minLength: 1, maxLength: 7 }
);

const minutesStateArbitrary = fc.record({
    type: fc.constant("minutes"),
    minuteInterval: one2safeInteger
});

const hourlyStateArbitrary = fc.record({
    type: fc.constant("hourly"),
    minutes: zero2sixty,
    hourInterval: one2twentyThree
});

const dailyStateArbitrary = fc.record({
    type: fc.constant("daily"),
    minutes: zero2sixty,
    hours: one2twentyThree,
    dayInterval: one2safeInteger
});

const weeklyStateArbitrary = fc.record({
    type: fc.constant("weekly"),
    minutes: zero2sixty,
    hours: one2twentyThree,
    days: arrayOfDays
});

const monthlyStateArbitrary = fc.record({
    type: fc.constant("monthly"),
    minutes: zero2sixty,
    hours: one2twentyThree,
    day: one2ThirtyOne,
    monthInterval: one2Twelve
});

export const state = fc.oneof(
    minutesStateArbitrary,
    hourlyStateArbitrary,
    dailyStateArbitrary,
    weeklyStateArbitrary,
    monthlyStateArbitrary
);

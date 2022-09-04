---
title: api
date: 2020-05-29
tags:
 - java
categories:
 - java基础
---

This is api.

## haha



### mhaskhfisog



## fsjifs



### cshiooefhsoi



```java
    /**
     * 获取去年第一天日期
     *
     * @param year 年份
     * @return Date
     */
    public static String getYearFirst(int year) {
        Calendar calendar = Calendar.getInstance();
        calendar.clear();
        calendar.set(Calendar.YEAR, year - 1);
        Date currYearFirst = calendar.getTime();
        String firstDayOfLastYear = DateUtils.covertDateToString(currYearFirst, "yyyy-MM-dd");
        return firstDayOfLastYear;
        weriowete
    }



```

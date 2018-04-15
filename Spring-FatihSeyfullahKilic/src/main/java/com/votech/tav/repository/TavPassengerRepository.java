package com.votech.tav.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.votech.tav.model.TavPassenger;

public interface TavPassengerRepository extends CrudRepository<TavPassenger, Integer> {
	
	@Query(value = "SELECT * FROM tav_passenger2 where last_seen_date > DateADD(ss, -5, Current_TimeStamp)", nativeQuery = true)
	List<TavPassenger> findByLast5Second();
	

}
